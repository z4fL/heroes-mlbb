import { getData } from "@/lib/api-lib";
import BottomSecton from "./BottomSecton";
import TopSection from "./TopSection";

const HeroId = async ({ params }) => {
  const id = (await params).id;
  const dataHero = await getData(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hero/${id}`);

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-12">
      <TopSection data={dataHero} />
      <BottomSecton data={dataHero} />
    </main>
  );
};
export default HeroId;
