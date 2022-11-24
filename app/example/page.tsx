import { TrpcProvider } from "lib/context/TrpcContext";
import Link from "next/link";
import { SearchHandle } from "./SearchHandle";

export default function Page() {
  return (
    <div>
      <div>example</div>
      <p>search for existing handle</p>
      <Link href="/">go home</Link>
      <TrpcProvider>
        <SearchHandle />
      </TrpcProvider>
    </div>
  );
}
