import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="bg-red-500 dark:bg-green-500">hello world</div>
      <p>some paragraph here</p>
      <Link href="/about">go about</Link>
      <Link href="/deserunt">go to deserunt</Link>
      <Link href="/ad">go to ad</Link>
      <Link href="/kekker">go to kekker</Link>
    </div>
  );
}
