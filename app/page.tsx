import Link from "next/link";
//import { ClientLink } from "./ClientLink";
import { ClientLinks } from "./ClientLinks";

export default function Page() {
  return (
    <div>
      <div className="bg-red-500 dark:bg-green-500">hello world</div>
      <p>some paragraph here</p>
      <div className="flex flex-col gap-2">
        <Link href="/about">go about</Link>

        <Link href="/example">go to example</Link>
        <h1>testing caching and page load time... for user pages</h1>
        <h2 className="mt-4">existing pregenerated</h2>
        <Link href="/eu">go to eu</Link>
        <Link href="/aliqua">go to aliqua</Link>
        <Link href="/tempor">go to tempor</Link>
        <Link href="/ullamco">go to ullamco</Link>
        <Link href="/mollit">go to mollit</Link>
        <Link href="/laboris">go to laboris</Link>

        {/*
        <h2 className="mt-4">existing but not pregenerated</h2>
        <ClientLink href="/deserunt">go to deserunt</ClientLink>
        <ClientLink href="/magna">go to magna</ClientLink>
        <ClientLink href="/commodo">go to commodo</ClientLink>
        <ClientLink href="/ad">go to ad</ClientLink>
  */}
        <ClientLinks />

        <h2 className="mt-4">nonexisting</h2>
        <Link href="/kekker">go to kekker</Link>
        <Link href="/berkor">go to berkor</Link>
        <Link href="/mamma">go to mamma</Link>

        <h2 className="mt-4">nonexisting generated anyway?..</h2>
        <Link href="/kekker">go to kekker</Link>
        <Link href="/berkor">go to berkor</Link>
        <Link href="/mamma">go to mamma</Link>
      </div>
    </div>
  );
}
