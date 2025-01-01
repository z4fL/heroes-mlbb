import { ProgressBarLink } from "@/app/progress-bar";
import Image from "next/image";

const BottomNavigation = ({ data }) => {
  return (
    <div className="bg-slate-950 z-10 w-full h-36 mx-auto flex justify-between">
      <ProgressBarLink
        href={`/heroes/${data.prev.id}`}
        className="relative group flex justify-end items-center px-10 w-full"
      >
        <Image
          src="/images/heroes/84/Hero841-portrait-removebg.png"
          width={240}
          height={390}
          alt={data.prev.name}
          quality={40}
          className="absolute z-20 right-60 -bottom-5 pointer-events-none w-40 h-auto mask-fade transform transition-all duration-300 group-hover:bottom-0"
        />
        <span className="font-tungsten text-color-base text-6xl">
          {data.prev.name}
        </span>
      </ProgressBarLink>
      <ProgressBarLink
        href={`/heroes/${data.next.id}`}
        className="relative group flex justify-start items-center px-10 w-full"
      >
        <Image
          src="/images/heroes/68/Hero681-portrait-removebg.png"
          width={240}
          height={390}
          alt={data.next.name}
          quality={40}
          className="absolute z-20 left-60 -bottom-5 pointer-events-none w-40 h-auto mask-fade transform transition-all duration-300 group-hover:bottom-0"
        />
        <span className="font-tungsten text-color-base text-6xl">
          {data.next.name}
        </span>
      </ProgressBarLink>
    </div>
  );
};

export default BottomNavigation;
