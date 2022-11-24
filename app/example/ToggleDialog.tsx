"use client";

import { useDialogDispatch } from "lib/context/DialogContext";

type Props = {
  className?: string;
};

export function ToggleDialog({ className = "" }: Props) {
  const dispatch = useDialogDispatch();

  return (
    <div className={className}>
      <button onClick={() => dispatch({ type: "toggle", name: "signin" })}>toggle here</button>
      <button onClick={() => dispatch({ type: "show", name: "signin" })}>show here</button>
      <button onClick={() => dispatch({ type: "hide", name: "signin" })}>hide here</button>
    </div>
  );
}
