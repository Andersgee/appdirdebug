export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

/**
 * prepend string with baseurl if it starts with `"/"`
 */
export function absUrl(url: string) {
  if (url.startsWith("/")) {
    return `${getBaseUrl()}${url}`;
  } else {
    return url;
  }
}
