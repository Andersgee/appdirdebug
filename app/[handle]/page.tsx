//export const preferredRegion = "edge";
//export const revalidate = 10;

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

async function getUser(handle: string) {
  //const url = "http://localhost:3000/api/user";
  const url = absUrl(`/api/user?handle=${handle}`);
  const res = await fetch(url, { next: { revalidate: 10 } });

  return await res.json();
}

export default async function Page({ params }: Props) {
  //console.log("in page. params.handle:", params.handle);
  const user = await getUser(params.handle);

  return (
    <div>
      <div>params.handle: {params.handle}</div>
      <div>user: {JSON.stringify(user)}</div>
    </div>
  );
}
