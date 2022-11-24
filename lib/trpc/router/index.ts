import { router } from "../trpc";
import { handleRouter } from "./handle";

export const appRouter = router({
  handle: handleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
