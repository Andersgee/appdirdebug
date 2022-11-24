import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerAuthSession } from "lib/utils/server-auth-session";
import { prisma } from "lib/dbclient/prisma";

/**
 * The createContext() function is called for each request
 * and the result is propagated to all resolvers.
 *
 * You can use this to pass contextual data down to the resolvers.
 */
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  const session = await getServerAuthSession({ req, res });
  return { session, prisma };
};

export type Context = inferAsyncReturnType<typeof createContext>;
