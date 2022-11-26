import "server-only";
import { env } from "lib/env/server.mjs";

/**
 * utility for calling /api/revalidate
 */
export async function revalidate(path: string) {
  return fetch(`/api/revalidate?key=${env.FETCH_KEY}&path=${path}`);
}
