"use client";

import Link from "next/link";

export function ClientLinks() {
  return (
    <>
      <h2 className="mt-4">existing but not pregenerated</h2>
      <Link href="/deserunt">go to deserunt</Link>
      <Link href="/magna">go to magna</Link>
      <Link href="/commodo">go to commodo</Link>
      <Link href="/ad">go to ad</Link>
    </>
  );
}
