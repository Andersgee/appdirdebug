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
        <Link href="/u/eu">go to eu</Link>
        <Link href="/u/aliqua">go to aliqua</Link>
        <Link href="/u/tempor">go to tempor</Link>
        <Link href="/u/ullamco">go to ullamco</Link>
        <Link href="/u/mollit">go to mollit</Link>
        <Link href="/u/laboris">go to laboris</Link>

        {/*
        <h2 className="mt-4">existing but not pregenerated</h2>
        <ClientLink href="/deserunt">go to deserunt</ClientLink>
        <ClientLink href="/magna">go to magna</ClientLink>
        <ClientLink href="/commodo">go to commodo</ClientLink>
        <ClientLink href="/ad">go to ad</ClientLink>
  */}
        <ClientLinks />

        <h2 className="mt-4">nonexisting</h2>
        <Link href="/u/kekker">go to kekker</Link>
        <Link href="/u/berkor">go to berkor</Link>
        <Link href="/u/mamma">go to mamma</Link>

        <h2 className="mt-4">nonexisting generated anyway?..</h2>
        <Link href="/u/kekker">go to kekker</Link>
        <Link href="/u/berkor">go to berkor</Link>
        <Link href="/u/mamma">go to mamma</Link>
      </div>
    </div>
  );
}
