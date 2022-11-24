"use client";

import { useId, useState } from "react";
import { trpc } from "lib/utils/trpc";

type Props = {
  className?: string;
};

export function SearchHandle({ className = "" }: Props) {
  const id = useId();
  const [text, setText] = useState("");
  const { data: exists } = trpc.handle.exists.useQuery({ text });

  return (
    <div className={className}>
      <input type="text" placeholder={"name"} onChange={(e) => setText(e.target.value)} />
      {exists && <span className="text-sm">(exists)</span>}
    </div>
  );
}
