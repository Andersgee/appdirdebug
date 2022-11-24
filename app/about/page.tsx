import Link from "next/link";
import { Hello } from "./Hello";

export default function Page() {
  return (
    <div>
      <div>about</div>
      <p>some paragraph here</p>
      <Link href="/about2">go about2</Link>
      <Hello />
    </div>
  );
}
