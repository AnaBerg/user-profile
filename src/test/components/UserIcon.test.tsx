import { screen, render } from "@testing-library/react";

import { faker } from "@faker-js/faker";

import { UserIcon } from "../../components";

describe("The UserIcon", () => {
  it("Should render correctly", async () => {
    render(<UserIcon score={38} icon={faker.image.avatar()} />);

    const text = await screen.findByText("38");

    expect(text).toBeInTheDocument();
  });
});
