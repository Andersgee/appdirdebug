import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="bg-red-500">hello world</div>
      <p>some paragraph here</p>
      <Link href="/about">go about</Link>
    </div>
  );
}
