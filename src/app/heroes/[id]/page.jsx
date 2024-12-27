import { dataHero } from "./data";
import TopSection from "./TopSection";

const HeroId = async ({ params }) => {
  const id = (await params).id;

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-10">
      <TopSection data={dataHero} />
    </main>
  );
};
export default HeroId;
