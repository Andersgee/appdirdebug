import { env } from "lib/env/server.mjs";

//export const preferredRegion = "edge";
export const revalidate = 30;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

function absUrl(url: string) {
  if (url.startsWith("/")) {
    return `${getBaseUrl()}${url}`;
  } else {
    return url;
  }
}

type Props = {
  params: { handle: string };
};

async function getUserId(handle: string) {
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

export default async function Page({ params }: Props) {
  //console.log("in page. params.handle:", params.handle);
  const userId = await getUserId(params.handle);
  if (!userId) {
    return <div>no user</div>;
  }

  return (
    <div>
      <div>params.handle: {params.handle}</div>
      <div>userId: {userId}</div>
    </div>
  );
}
