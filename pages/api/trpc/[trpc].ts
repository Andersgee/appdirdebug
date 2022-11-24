import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "lib/env/server.mjs";
import { createContext } from "lib/trpc/context";
import { appRouter } from "lib/trpc/router";

export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
