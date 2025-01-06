"use client";

import { getData } from "@/lib/api-lib";
import Image from "next/image";
import { useEffect, useState } from "react";

const EmblemTalent = () => {
  const [data, setData] = useState([]);
  const [activeEmblem, setActiveEmblem] = useState({});
  const [hoveredTalent, setHoveredTalent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/emblem-talents`
      );

      setData(data);
    };

    fetchData();
  }, []);

  const handleClickEmblem = (emblem) => {
    if (emblem.name !== activeEmblem.name) {
      setActiveEmblem(emblem);
    }
  };

  return (
    <main className="bg-midnight min-h-screen flex flex-col items-center mt-20">
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="w-full max-w-screen-lg mx-auto flex justify-center flex-wrap ">
          <div className="flex justify-center items-center flex-wrap">
            {data.map((emblem) => (
              <div
                key={emblem.name}
                className={`relative w-16 h-16 mx-8 ${
                  activeEmblem === emblem && "border-b-2 border-b-highlight"
                }`}
                onClick={() => handleClickEmblem(emblem)}
              >
                <div
                  style={{ backgroundImage: `url(${emblem.icon})` }}
                  className="relative z-20 w-16 h-16 cursor-pointer bg-cover bg-center bg-no-repeat"
                />
                <div
                  className={`z-10 absolute w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full ${
                    activeEmblem.name === emblem.name &&
                    "bg-white/20 drop-shadow-[0_0px_5px_white]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        {activeEmblem && Object.keys(activeEmblem).length > 0 && (
          <div className="w-full min-h-[500px] flex mt-5 border-2 border-highlight">
            <div className="basis-2/12 p-4 bg-slate-950 text-soft-white divide-y">
              <h3 className="text-center text-2xl pb-1">Attributes</h3>
              <div className="flex flex-col pt-4 space-y-5">
                {activeEmblem.attributes.map((attribute) => (
                  <div key={attribute.name} className="flex flex-col">
                    <span className="text-base">{attribute.name}</span>
                    <span className="text-lg text-yellow-200">
                      +{attribute.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-6/12 p-4 flex-col space-y-3">
              <div className="pb-1">
                <h3 className="text-xl text-center text-soft-white">
                  Standard Talent
                </h3>
                <div className="mt-5 flex flex-wrap gap-20 justify-center">
                  {activeEmblem.talents
                    .filter((talent) => talent.type === "standard")
                    .map((talent) => (
                      <Image
                        key={talent.name}
                        src={talent.icon}
                        width={80}
                        height={80}
                        alt={talent.name}
                        onMouseEnter={() => setHoveredTalent(talent)}
                        onMouseLeave={() => setHoveredTalent(null)}
                        className="p-1 object-cover rounded-full hover:shadow-[0_0_1px_3px_white]"
                      />
                    ))}
                </div>
              </div>
              <div className="pb-1">
                <h3 className="text-xl text-center text-soft-white">
                  Advanced Talent
                </h3>
                <div className="mt-5 flex flex-wrap gap-20 justify-center">
                  {activeEmblem.talents
                    .filter((talent) => talent.type === "advanced")
                    .map((talent) => (
                      <Image
                        key={talent.name}
                        src={talent.icon}
                        width={80}
                        height={80}
                        alt={talent.name}
                        onMouseEnter={() => setHoveredTalent(talent)}
                        onMouseLeave={() => setHoveredTalent(null)}
                        className="p-1 object-cover rounded-full hover:shadow-[0_0_1px_3px_white]"
                      />
                    ))}
                </div>
              </div>
              <div className="pb-1">
                <h3 className="text-xl text-center text-soft-white">
                  Core Talent
                </h3>
                <div className="mt-5 flex flex-wrap gap-20 justify-center">
                  {activeEmblem.talents
                    .filter((talent) => talent.type === "core")
                    .map((talent) => (
                      <Image
                        key={talent.name}
                        src={talent.icon}
                        width={80}
                        height={80}
                        alt={talent.name}
                        onMouseEnter={() => setHoveredTalent(talent)}
                        onMouseLeave={() => setHoveredTalent(null)}
                        className="object-cover rounded-full hover:shadow-[0_0_1px_3px_white]"
                      />
                    ))}
                </div>
              </div>
            </div>
            {hoveredTalent && (
              <div className="basis-4/12 bg-slate-950 flex flex-col text-soft-white p-4">
                <div className="divide-y">
                  <h3 className="font-bold text-2xl text-center pb-1">
                    {hoveredTalent.name}
                  </h3>
                  <div>
                    {hoveredTalent.info && (
                      <p className="pt-1 text-center text-orange-300 text-base">
                        {hoveredTalent.info}
                      </p>
                    )}
                    <p className="pt-3 text-lg">{hoveredTalent.description}</p>
                    {hoveredTalent.infoDesc && (
                      <p className="pt-2 text-base text-slate-300">
                        {hoveredTalent.infoDesc}
                      </p>
                    )}
                    {hoveredTalent.duration && (
                      <p className="pt-2">
                        Duration: <span>{hoveredTalent.duration}s</span>
                      </p>
                    )}
                    {hoveredTalent.cooldown && (
                      <p className="pt-2">
                        Cooldown: <span>{hoveredTalent.cooldown}s</span>
                      </p>
                    )}
                    {hoveredTalent.infoCooldown && (
                      <p className="pt-2 text-base text-slate-300">
                        {hoveredTalent.infoCooldown}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default EmblemTalent;
