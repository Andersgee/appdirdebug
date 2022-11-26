import "server-only";
//import { kysely } from "lib/dbclient/kysely";
import { cache } from "react";
import { prisma } from "../dbclient/prisma";
//import { env } from "lib/env/server.mjs";
//import { absUrl } from "./url";

export const getUserIdByHandle = cache(async (handle: string) => {
  const user = await prisma.user.findUnique({
    where: {
      handle: handle,
    },
  });
  if (user) {
    return user.id;
  }
  return null;
});

/*
export async function getUserIdByHandle(handle: string) {
  try {
    const url = absUrl(`/api/userId?key=${env.FETCH_KEY}&handle=${handle}`);
    //const res = await fetch(url, { next: { revalidate: 30 } });
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
*/
