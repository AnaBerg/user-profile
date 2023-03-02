import { screen, render } from "@testing-library/react";

import { rest } from "msw";
import { setupServer } from "msw/node";

import Home from "../../pages/[id]";

import { generateUser } from "../utils/generateUser";

describe("The Home", () => {
  const user = generateUser();

  global.fetch = jest.fn();

  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    query: { id: user.id },
  }));

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("Should render correctly", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(user),
        status: 200,
      })
    );
    render(<Home />);

    const text = await screen.findByText(user.name);

    expect(text).toBeInTheDocument();
  });
  it("Should return the error message if the status code isn't 200", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Error" }),
        status: 500,
      })
    );
    render(<Home />);

    const text = await screen.findByText("Failed to Fetch");
    const name = screen.queryByText(user.name);

    expect(text).toBeInTheDocument();
    expect(name).not.toBeInTheDocument();
  });
});
