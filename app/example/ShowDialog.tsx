"use client";

import { useDialogContext } from "lib/context/DialogContext";

type Props = {
  className?: string;
};

export function ShowDialog({ className = "" }: Props) {
  const { signin } = useDialogContext();

  return <div className={className}>signin: {JSON.stringify(signin)}</div>;
}
