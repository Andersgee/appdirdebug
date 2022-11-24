import Link from "next/link";
import { Hello } from "./Hello";

export default function Page() {
  return (
    <div>
      <div>about</div>
      <p>some paragraph here</p>
      <Link href="/">go home</Link>
      <Hello />
    </div>
  );
}
