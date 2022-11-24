import { getUserIdByHandle } from "lib/utils/fetchers";

export const preferredRegion = "edge";
export const revalidate = 30;
export const dynamicParams = true;
export const generateStaticParams = () => [];

type Props = {
  params: { handle: string };
};

export default async function Page({ params }: Props) {
  const userId = await getUserIdByHandle(params.handle);
  if (!userId) {
    return <div>no user</div>;
  }

  return (
    <div>
      <div>params.handle: {params.handle}</div>
      <div>userId: {userId}</div>
    </div>
  );
}
