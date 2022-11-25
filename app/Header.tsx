//import Link from "next/link";
//import { Stars } from "src/icons/Stars";
//import { Pathname } from "./Pathname";

type Props = {
  className?: string;
};

export function Header({ className = "" }: Props) {
  //const { data: sessionData } = useSession();
  return (
    <div className={className}>
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="ml-4 font-medium capitalize">header here</div>
        </div>
        <div>opt</div>
      </header>
    </div>
  );
}
