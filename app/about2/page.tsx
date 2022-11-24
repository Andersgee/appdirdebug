import Link from "next/link";
import { Hello } from "../about/Hello";

export default function Page() {
  return (
    <div>
      <div>about2</div>
      <p>some paragraph here hmm</p>
      <Link href="/">go home</Link>
      <Hello />
    </div>
  );
}
