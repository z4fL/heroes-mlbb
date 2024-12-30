import { getData } from "@/lib/api-lib";
import BottomSecton from "./BottomSecton";
import TopSection from "./TopSection";
import BottomNavigation from "./BottomNavigation";

const HeroId = async ({ params }) => {
  const id = (await params).id;
  const {data: dataHero, surroundingHeroes} = await getData(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/hero/${id}`
  );

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-12">
      <TopSection data={dataHero} />
      <BottomSecton data={dataHero} />
      {/* <BottomNavigation data={surroundingHeroes} /> */}
    </main>
  );
};
export default HeroId;
