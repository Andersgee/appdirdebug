import { getUserIdByHandle } from "lib/utils/fetchers";

//export const preferredRegion = "edge";
//export const revalidate = 30;
export const dynamicParams = true;
export const generateStaticParams = () => [
  { handle: "eu" },
  { handle: "aliqua" },
  //{ handle: "deserunt" }, //exist but dont generate
  //{ handle: "magna" }, //exist but dont generate
  //{ handle: "commodo" }, //exist but dont generate
  //{ handle: "ad" }, //exist but dont generate
  { handle: "tempor" },
  { handle: "ullamco" },
  { handle: "mollit" },
  { handle: "laboris" },
  { handle: "kekker" }, //nonexisting but generate anyway?
  { handle: "berkor" }, //nonexisting but generate anyway?
  { handle: "mamma" }, //nonexisting but generate anyway?
];

export default async function Page({ params }: { params: { handle: string } }) {
  const userId = await getUserIdByHandle(params.handle);

  return (
    <div>
      <div className="bg-red-500 dark:bg-green-500">params.handle: {params.handle}</div>
      <div>userId: {userId}</div>
    </div>
  );
}
