import type { NextApiRequest, NextApiResponse } from "next";
import { kysely } from "lib/dbclient/kysely";
import { env } from "lib/env/server.mjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { key, handle } = req.query;
  if (typeof key !== "string" || key !== env.FETCH_KEY) {
    return res.status(401).end();
  }

  if (typeof handle !== "string") {
    return res.status(404).send("no user");
  }

  const user = await kysely.connection().execute((db) => {
    return db.selectFrom("User").where("User.handle", "=", handle).selectAll().executeTakeFirst();
  });

  if (!user) {
    return res.status(404).send("no user");
  }

  return res.status(200).send(user.id);
}
