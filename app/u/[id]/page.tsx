import { getUserIdByHandle } from "lib/utils/fetchers";

//export const preferredRegion = "edge";
//export const revalidate = 30;
export const dynamicParams = true;
export const generateStaticParams = () => [
  { id: "eu" },
  { id: "aliqua" },
  //{ id: "deserunt" }, //exist but dont generate
  //{ id: "magna" }, //exist but dont generate
  //{ id: "commodo" }, //exist but dont generate
  //{ id: "ad" }, //exist but dont generate
  { id: "tempor" },
  { id: "ullamco" },
  { id: "mollit" },
  { id: "laboris" },
  { id: "kekker" }, //nonexisting but generate anyway?
  { id: "berkor" }, //nonexisting but generate anyway?
  { id: "mamma" }, //nonexisting but generate anyway?
];

export default async function Page({ params }: { params: { id: string } }) {
  const userId = await getUserIdByHandle(params.id);

  return (
    <div>
      <div className="bg-red-500 dark:bg-green-500">params.id: {params.id}</div>
      <div>userId: {userId}</div>
    </div>
  );
}
