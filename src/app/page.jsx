import Image from "next/image";
import ProjectNext23 from "../../public/images/projectnext23.jpeg";
import KugisakiNobara from "../../public/images/kugisaki-nobara.png";
import MWorldLing from "../../public/images/mworld_ling.png";
import CTAButton from "@/components/CTAButton";
import { ProgressBarLink } from "./progress-bar";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-10 bg-midnight max-w-screen-2xl mx-auto">
      <section className="relative flex px-36 w-full h-[720px]">
        <div className="absolute z-0 left-0 h-full w-full">
          <div className="absolute backdrop-brightness-[0.75] h-full w-full" />
          <Image
            src={ProjectNext23}
            alt="project next 2023"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="relative h-full w-[1px] bg-highlight left-0 z-0" />
        <div className="relative z-10 h-auto w-full max-w-screen-2xl mx-auto flex flex-col-reverse">
          <div className="relative my-20 mr-6 text-end">
            <h2 className="text-9xl uppercase font-tungsten text-soft-white">
              heroes
            </h2>
            <p className="text-2xl font-dinnext text-soft-white -mt-4 mb-5">
              Become an expert in mastering heroes
            </p>
            <div className="mb-9">
              <ProgressBarLink href="/heroes">
                <CTAButton text="View All" />
              </ProgressBarLink>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex px-36 w-full h-[720px] overflow-y-hidden">
        <div className="absolute z-10 left-0 h-full w-full">
          <Image
            src={KugisakiNobara}
            alt="Kugisaki Nobara"
            quality={60}
            className="w-full object-cover h-auto mt-20"
          />
        </div>
        <div className="relative h-full w-[1px] bg-highlight left-0 z-0" />
        <div className="relative z-20 h-auto max-w-screen-2xl">
          <div className="relative mt-20 ml-6">
            <h2 className="text-9xl uppercase font-tungsten text-soft-white">
              equipment
            </h2>
            <div className="relative mt-36">
              <p className="text-2xl font-dinnext text-soft-white whitespace-pre">
                Good equipment will make it easier to win{"\n"}
                {"\n"}
                Get recommendations from top players{"\n"}
                Or you can mix it yourself
              </p>
              <div className="mt-9">
                <ProgressBarLink href="#">
                  <CTAButton text="View All" />
                </ProgressBarLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex px-36 w-full h-[720px] overflow-y-hidden">
        <div className="absolute z-10 left-0 h-full w-full">
          <Image
            src={MWorldLing}
            alt="M World Ling"
            quality={60}
            className="w-full object-cover h-auto mt-12"
          />
        </div>
        <div className="relative h-full w-[1px] bg-highlight left-0 z-0" />
        <div className="relative z-20 h-auto max-w-screen-2xl">
          <div className="relative mt-20 ml-6">
            <h2 className="text-9xl uppercase font-tungsten text-soft-white">
              game modes
            </h2>
            <div className="relative mt-8">
              <p className="text-2xl font-dinnext text-soft-white whitespace-pre">
                Bored with the same game modes?{"\n"}
                Try different modes and have fun!
              </p>
              <p className="mt-4 text-xl font-dinnext text-soft-white whitespace-pre">
                Starting from the fastest mode to the relaxing one you can try
              </p>
              <div className="mt-9">
                <ProgressBarLink href="#">
                  <CTAButton text="View All" />
                </ProgressBarLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
