import { getUserIdByHandle } from "lib/utils/fetchers";

//export const preferredRegion = "edge";
export const revalidate = 30;
export const dynamicParams = true;
export const generateStaticParams = () => [];

type Props = {
  params: { handle: string };
};

export default async function Page({ params }: Props) {
  const userId = await getUserIdByHandle(params.handle);
  const date = new Date();
  if (!userId) {
    return <div>no user</div>;
  }

  return (
    <div>
      <div className="bg-red-500 dark:bg-green-500">params.handle: {params.handle}</div>
      <div>userId: {userId}</div>
      <div>date: {date.toISOString()}</div>
    </div>
  );
}
