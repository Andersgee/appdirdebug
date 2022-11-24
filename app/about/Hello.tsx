"use client";

import { useSession } from "next-auth/react";

type Props = {
  className?: string;
};

export function Hello({ className = "" }: Props) {
  const { data: session, status } = useSession();

  return (
    <div className={` ${className}`}>
      <div>status: {status}</div>
      <div>session: {JSON.stringify(session)}</div>
    </div>
  );
}
