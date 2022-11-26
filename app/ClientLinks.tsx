"use client";

import Link from "next/link";

export function ClientLinks() {
  return (
    <>
      <h2 className="mt-4">existing but not pregenerated</h2>
      <Link href="/u/deserunt">go to deserunt</Link>
      <Link href="/u/magna">go to magna</Link>
      <Link href="/u/commodo">go to commodo</Link>
      <Link href="/u/ad">go to ad</Link>
    </>
  );
}
