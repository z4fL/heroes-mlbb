"use client";

import ClockIcon from "@/components/svg/ClockIcon";
import Image from "next/image";
import { useState } from "react";

const BottomSecton = ({ data }) => {
  const skillResource = {
    type: data.abilityResource,
    color: data.abilityResourceColor,
    name: data.abilityResourceName,
  };
  const abilities = data.abilities;

  const [activeAbility, setActiveAbility] = useState(abilities[2]);

  const cooldownScaling =
    activeAbility.scalings &&
    activeAbility.scalings.find((item) => item.type === "Cooldown");

  const costScaling =
    activeAbility.scalings &&
    activeAbility.scalings.find((item) => item.type.includes("Cost"));

  const damageType = activeAbility.skillTerms.find((item) =>
    ["Magic Damage", "Physical Damage", "True Damage"].includes(item.name)
  );

  const scallingsValue = activeAbility.scalings || [];

  const handleClickAbility = (ability) => {
    if (activeAbility !== ability) {
      setActiveAbility(ability);
    }
  };

  return (
    <div className="relative z-10 -mt-10 pt-16 w-full bg-midnight min-h-[400px]">
      <div className="flex flex-col items-center">
        <h1 className="pb-5 text-5xl text-highlight text-center font-tungsten uppercase">
          Skill introduction
        </h1>
        <div className="w-full max-w-screen-xl min-h-[542px] flex space-x-5">
          <div className="w-[55%]">
            <div className="relative w-full">
              <div className="relative w-full h-auto aspect-video bg-soft-white" />
              <div className="absolute inset-x-0 -bottom-10 flex w-full justify-center flex-wrap z-20">
                {abilities.map((ability) => (
                  <div
                    key={ability.id}
                    style={{ backgroundImage: `url('${ability.icon}')` }}
                    className={`relative w-20 h-20 mx-1 mb-2 cursor-pointer bg-cover bg-center bg-no-repeat rounded-full transition transform ease-in-out duration-100 hover:scale-110 shadow-[0px_0px_10px_rgb(0,0,0)] ${
                      activeAbility.name === ability.name
                        ? "filter-none scale-110"
                        : "filter saturate-0 brightness-75"
                    }`}
                    onClick={() => handleClickAbility(ability)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-[45%] min-h-0 flex flex-col items-center">
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
                <h2 className="font-dinnext text-xl uppercase font-bold text-soft-white">
                  {activeAbility.name}
                </h2>
                <div className="flex items-center gap-2">
                  {activeAbility.abilityTags.map((tag) => (
                    <div
                      key={tag.id}
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

            {activeAbility.type !== "Passive" &&
              scallingsValue.length !==
                0 &&(
                  <div className="flex flex-col w-full bg-gray-950 px-7 py-3">
                    <div className="flex justify-between flex-wrap pb-1 text-color-base">
                      {cooldownScaling && (
                        <CooldownDisplay
                          levelValues={cooldownScaling.levelValues}
                        />
                      )}
                      {costScaling && (
                        <AbilityCostDisplay
                          color={skillResource.color}
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
      <ClockIcon className="w-4 h-4" />
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
        className="w-4 h-4"
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

export default BottomSecton;
