import type { User } from "@prisma/client/edge";
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { env } from "lib/env/server.mjs";

interface Database {
  User: User;
  //add things here manually?
}

/**
 * Typesafe query builder for the fetch api compatible `@planetscale/database` driver
 *
 * ### example usage
 * ```ts
 * const user = await kysely.connection().execute((db) => {
 *   return db.selectFrom("User").where("User.handle", "=", "someHandle").selectAll().executeTakeFirst();
 * });
 * ```
 */
export const kysely = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: env.DATABASE_URL,
  }),
});
