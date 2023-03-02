// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import jsonUsers from "../../../database/users.json";

import type { User } from "../../../types/user";
import type { ErrorResponse } from "../../../types/error_response";

const users = jsonUsers as Array<User>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const user = users.find((u) => u.id === Number(id));

      if (user) {
        return res.status(200).json(user as User);
      } else {
        return res
          .status(404)
          .json({ message: `User ${id} :: User not found` });
      }

    default:
      return res.status(405).json({
        message: "Not a valid HTTP method for this route",
      });
  }
}
