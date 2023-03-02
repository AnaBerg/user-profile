import { createMocks } from "node-mocks-http";
import fs from "fs";

import handler from "../../../../pages/api/users/[id]";
import { generateUser } from "../../../utils/generateUser";

describe("The handler", () => {
  it("should return the user by it's id", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: 123,
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({ name: "Theodore Taylor" })
    );
  });
  it("Should return an error if user isn't found", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: 321,
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "User 321 :: User not found",
      })
    );
  });
  it("Should return an error if the method isn't GET", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        id: 123,
      },
    });

    handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: "Not a valid HTTP method for this route",
      })
    );
  });
});
