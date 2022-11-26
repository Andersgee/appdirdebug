"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ClientLink({ href, children }: Props) {
  return <Link href={href}>{children}</Link>;
}
