import BottomSecton from "./BottomSecton";
import { dataHero } from "./data";
import TopSection from "./TopSection";

const HeroId = async ({ params }) => {
  const id = (await params).id;

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-12">
      <TopSection data={dataHero} />
      <BottomSecton data={dataHero} />
    </main>
  );
};
export default HeroId;
