"use client";

import ArrowsRightLeft from "@/components/svg/ArrowsRightLeft";
import ClockIcon from "@/components/svg/ClockIcon";
import Image from "next/image";
import { useState } from "react";

const BottomSection = ({ data }) => {
  const [abilities, setAbilities] = useState(() => {
    return data.abilities.reduce((acc, ability) => {
      if (!acc.some((item) => item.type === ability.type)) {
        acc.push(ability);
      }
      return acc;
    }, []);
  });
  const [activeAbility, setActiveAbility] = useState(data.abilities[0]);

  const cooldownScaling =
    activeAbility.scalings &&
    activeAbility.scalings.find((item) => item.type === "Cooldown");

  const costScaling =
    activeAbility.scalings &&
    activeAbility.scalings.find((item) => item.type.includes("Cost"));

  const scallingsValue = activeAbility.scalings || [];

  const damageType = activeAbility.skillTerms.find((item) =>
    ["Magic Damage", "Physical Damage", "True Damage"].includes(item.name)
  );

  const handleClickAbility = (ability) => {
    if (activeAbility !== ability) {
      setActiveAbility(ability);
    }
  };

  const handleSwitch = () => {
    setAbilities((prevAbilities) => {
      const groupedByType = data.abilities.reduce((acc, ability) => {
        acc[ability.type] = acc[ability.type] || [];
        acc[ability.type].push(ability);
        return acc;
      }, {});

      // Rotasi cyclic untuk setiap tipe
      const switchedAbilities = prevAbilities.map((currentAbility) => {
        const group = groupedByType[currentAbility.type];
        const currentIndex = group.findIndex(
          (item) => item.id === currentAbility.id
        );
        const nextIndex = (currentIndex + 1) % group.length;
        return group[nextIndex];
      });

      // Update activeAbility jika ada
      if (activeAbility) {
        const activeGroup = groupedByType[activeAbility.type];
        const activeIndex = activeGroup.findIndex(
          (item) => item.id === activeAbility.id
        );
        const nextActiveIndex = (activeIndex + 1) % activeGroup.length;
        setActiveAbility(activeGroup[nextActiveIndex]);
      }

      return switchedAbilities;
    });
  };

  return (
    <div className="relative z-10 py-16 w-full bg-midnight">
      <div className="flex flex-col items-center">
        <h1 className="pb-5 text-5xl text-highlight text-center font-tungsten uppercase">
          Skill introduction
        </h1>
        <div className="w-full max-w-screen-lg min-h-[542px] flex space-x-5 px-4">
          <div className="w-2/12">
            <div className="relative w-full">
              <div className="flex flex-col w-full items-center flex-wrap z-20">
                {abilities.map((ability) => (
                  <div
                    key={ability.id}
                    style={{ backgroundImage: `url('${ability.icon}')` }}
                    className={`relative w-16 h-16 m-1 cursor-pointer bg-cover bg-center bg-no-repeat rounded-full transition transform ease-in-out duration-100 hover:scale-110 shadow-[0px_0px_10px_rgb(0,0,0)] ${
                      activeAbility.name === ability.name
                        ? "filter-none scale-110"
                        : "filter saturate-0 brightness-75"
                    }`}
                    onClick={() => handleClickAbility(ability)}
                  />
                ))}
              </div>
              <div
                className="absolute right-2 top-0 z-30 p-1 group border border-highlight hover:bg-highlight rounded-full cursor-pointer"
                onClick={() => handleSwitch()}
              >
                <ArrowsRightLeft className="w-4 h-4 text-highlight group-hover:text-soft-white" />
              </div>
            </div>
          </div>
          <div className="w-10/12 min-h-0 flex flex-col items-center">
            <div className="flex w-full p-2 bg-gray-800">
              {activeAbility.icon && (
                <Image
                  src={activeAbility.icon}
                  alt={activeAbility.name}
                  width={96}
                  height={96}
                  className="m-3 max-w-24 h-full max-h-24 rounded-full shadow-[0px_0px_10px_rgb(0,0,0)]"
                />
              )}
              <div className="flex flex-col grow m-2">
                <h2 className="font-dinnext text-xl uppercase font-bold text-soft-white select-none">
                  {activeAbility.name}
                </h2>
                <div className="flex items-center gap-2">
                  {activeAbility.abilityTags.map((tag) => (
                    <div
                      key={tag.name}
                      style={{ backgroundColor: tag.color }}
                      className="font-dinnext text-xs px-2.5 pb-1 text-soft-white"
                    >
                      {tag.name}
                    </div>
                  ))}
                </div>
                <FormatDescription
                  description={activeAbility.description}
                  skillTerms={activeAbility.skillTerms}
                  descValues={activeAbility.descValues}
                />
              </div>
            </div>

            {scallingsValue.length !== 0 && (
              <div className="flex flex-col w-full bg-gray-950 px-7 py-3">
                <div className="flex justify-between flex-wrap pb-1 text-color-base text-sm">
                  {cooldownScaling && (
                    <CooldownDisplay
                      levelValues={cooldownScaling.levelValues}
                    />
                  )}
                  {costScaling && (
                    <AbilityCostDisplay
                      color={data.abilityResourceColor}
                      levelValues={costScaling.levelValues}
                    />
                  )}
                </div>

                <div className="w-full flex">
                  <div className="w-1/2 flex flex-col items-center">
                    <div className="w-full flex flex-col flex-wrap items-center">
                      {damageType && (
                        <div className="w-full flex font-bold text-color-base uppercase whitespace-nowrap ">
                          <p>Damage Type :</p>
                          <p
                            className="ml-1"
                            style={{ color: damageType.color }}
                          >
                            {damageType.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col pt-4">
                  {scallingsValue
                    .filter(
                      (value) =>
                        !value.type.includes("Cost") &&
                        !value.type.includes("Cooldown")
                    )
                    .map((value) => (
                      <div
                        key={value.type}
                        className="h-6 flex font-bold text-sm text-color-base uppercase"
                      >
                        {value.type}
                        <p className="ml-1 text-highlight font-semibold ">
                          {value.levelValues.all
                            ? value.levelValues.all
                            : Object.entries(value.levelValues)
                                .map(([_, value]) => value)
                                .join(" / ")}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function FormatDescription({ description, descValues, skillTerms }) {
  const replacePlaceholders = (desc) => {
    return desc.replace(/\{(\w+)\}/g, (_, key) => descValues[key] || `${key}`);
  };

  const highlightSkillTerms = (desc) => {
    return skillTerms.reduce((formattedDesc, term) => {
      // Pertama, ganti istilah skillTerms di dalam teks biasa
      const regexTerm = new RegExp(`\\b${term.name}\\b`, "g");
      formattedDesc = formattedDesc.replace(
        regexTerm,
        `<span style="color: ${term.color};">${term.name}</span>`
      );

      // Kedua, cari dan ganti teks dalam tanda kurung yang mengandung skillTerms
      const regexInParentheses = new RegExp(
        `\\(\\+[^)]*${term.name}[^)]*\\)`,
        "g"
      );
      formattedDesc = formattedDesc.replace(regexInParentheses, (match) => {
        return `<span style="color: ${term.color};">${match}</span>`;
      });

      return formattedDesc;
    }, desc);
  };

  const format = highlightSkillTerms(replacePlaceholders(description));

  return (
    <p
      className="mt-3 mb-4 whitespace-pre-wrap text-pretty text-base text-soft-white inline"
      dangerouslySetInnerHTML={{
        __html: format,
      }}
    />
  );
}

function CooldownDisplay({ levelValues }) {
  return (
    <div className="flex items-center">
      <Image
        src="/images/cooldown.png"
        alt="cooldown icon"
        width={16}
        height={16}
        className="rounded-sm"
      />
      <div className="ml-1">
        {levelValues.all ? (
          <span>{levelValues.all}</span>
        ) : (
          <span>
            {Object.entries(levelValues)
              .map(([_, value]) => value)
              .join(" / ")}
          </span>
        )}
      </div>
    </div>
  );
}

function AbilityCostDisplay({ color, levelValues }) {
  return (
    <div className="flex items-center">
      <div
        style={{
          backgroundColor: color,
        }}
        className="w-4 h-4 rounded-sm"
      />
      <div className="ml-1">
        {levelValues.all ? (
          <span>{levelValues.all}</span>
        ) : (
          <span>
            {Object.entries(levelValues)
              .map(([_, value]) => value)
              .join(" / ")}
          </span>
        )}
      </div>
    </div>
  );
}

export default BottomSection;
