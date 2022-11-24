/*
import type { User } from "@prisma/client/edge";
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface Database {
  User: User;
  //add things here manually?
}

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL,
  }),
});
*/

export const TODO = true;

/*
const data = await db.connection().execute((db) => {
  return db.selectFrom("User").where("User.handle", "=", handle).selectAll().executeTakeFirst();
});
*/
