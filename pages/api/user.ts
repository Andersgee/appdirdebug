// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  "name": string;
  "date generated api side": string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const date = new Date();
  const d = date.toISOString();

  console.log(req.query);
  res.status(200).json({ "name": "John Doe", "date generated api side": d });
}
