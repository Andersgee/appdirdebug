"use client";

import { SessionProvider as NextauthSessionProvider } from "next-auth/react";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextauthSessionProvider>{children}</NextauthSessionProvider>;
}
