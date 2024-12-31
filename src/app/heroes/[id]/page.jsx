import { getData } from "@/lib/api-lib";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import BottomNavigation from "./BottomNavigation";

const HeroId = async ({ params }) => {
  const id = (await params).id;
  const { data, pagination } = await getData(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/hero/${id}`
  );

  return (
    <main className="relative bg-midnight min-h-screen flex flex-col items-center mt-12">
      <TopSection data={data} />
      <BottomSection data={data} />
      <BottomNavigation data={pagination} />
    </main>
  );
};
export default HeroId;
