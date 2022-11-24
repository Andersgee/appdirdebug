import Link from "next/link";
import { SearchHandle } from "./SearchHandle";
import { ShowDialog } from "./ShowDialog";
import { ToggleDialog } from "./ToggleDialog";

export default function Page() {
  return (
    <div>
      <div>example</div>
      <p>search for existing handle</p>
      <Link href="/">go home</Link>
      <SearchHandle />
      <ToggleDialog />
      <ShowDialog />
    </div>
  );
}
