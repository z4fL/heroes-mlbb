import { ProgressBarLink } from "@/app/progress-bar";
import Image from "next/image";

const BottomNavigation = ({ data }) => {
  if (data.prev && !data.next) {
    return (
      <div className="bg-slate-950 w-full py-12">
        <div className="max-w-screen-sm mx-auto flex justify-start items-center px-5">
          {data.prev && (
            <HeroImage
              id={data.prev.id}
              src={data.prev.portrait}
              alt={data.prev.name}
              name={data.prev.name}
            />
          )}
        </div>
      </div>
    );
  }

  if (!data.prev && data.next) {
    return (
      <div className="bg-slate-950 w-full py-12">
        <div className="flex justify-center items-center px-5">
          <HeroImage
            id={data.next.id}
            src={data.next.portrait}
            alt={data.next.name}
            name={data.next.name}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 w-full py-12">
      <div className="max-w-screen-sm mx-auto flex justify-between items-center px-5">
        <HeroImage
          id={data.prev.id}
          src={data.prev.portrait}
          alt={data.prev.name}
          name={data.prev.name}
        />
        <HeroImage
          id={data.next.id}
          src={data.next.portrait}
          alt={data.next.name}
          name={data.next.name}
        />
      </div>
    </div>
  );
};

const HeroImage = ({ id, src, alt, name }) => (
  <ProgressBarLink
    href={`/heroes/${id}`}
    className="group flex items-center space-x-5"
  >
    <span className="text-color-base text-4xl">{name}</span>
    <Image
      src={"/images/heroes/84/Hero841-portrait-removebg.png"}
      width={240}
      height={390}
      alt={alt}
      quality={40}
      className="z-10 pointer-events-none w-[120px] max-h-36 h-full object-top object-cover transform transition-transform duration-300 group-hover:-translate-y-5"
    />
  </ProgressBarLink>
);

export default BottomNavigation;
