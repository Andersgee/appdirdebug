import { env } from "lib/env/server.mjs";
import { absUrl } from "./url";

export async function getUserIdByHandle(handle: string) {
  try {
    const url = absUrl(`/api/userId?key=${env.FETCH_KEY}&handle=${handle}`);
    const res = await fetch(url, { next: { revalidate: 30 } });
    if (res.ok) {
      return await res.text();
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
