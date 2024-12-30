import { ProgressBarLink } from "@/app/progress-bar";
import Image from "next/image";

const BottomNavigation = ({ data }) => {
  return (
    <div className="bg-slate-950 w-full py-12">
      <div className="max-w-screen-sm mx-auto flex justify-between items-center px-5">
        <ProgressBarLink
          href={`/heroes/${data.prev.id}`}
          className="group flex items-center space-x-5"
        >
          <Image
            src={"/images/heroes/84/Hero841-portrait-removebg.png"}
            width={240}
            height={390}
            alt={data.prev.name}
            quality={40}
            className="z-10 pointer-events-none w-[120px] max-h-36 h-full object-top object-cover transform transition-transform duration-300 group-hover:-translate-y-5"
          />
          <span className="font-tungsten text-color-base text-6xl">{data.prev.name}</span>
        </ProgressBarLink>
        <ProgressBarLink
          href={`/heroes/${data.next.id}`}
          className="group flex items-center space-x-5"
        >
          <span className="font-tungsten text-color-base text-6xl">{data.next.name}</span>
          <Image
            src={"/images/heroes/84/Hero841-portrait-removebg.png"}
            width={240}
            height={390}
            alt={data.next.name}
            quality={40}
            className="z-10 pointer-events-none w-[120px] max-h-36 h-full object-top object-cover transform transition-transform duration-300 group-hover:-translate-y-5"
          />
        </ProgressBarLink>
      </div>
    </div>
  );
};

export default BottomNavigation;
