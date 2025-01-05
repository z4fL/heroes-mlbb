"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
  {
    icon: "/images/emblem/basic/Basic_Common_Emblem.png",
    name: "Basic Common Emblem",
    attributes: [
      {
        name: "Hybrid regen",
        value: 12.0,
      },
      {
        name: "HP",
        value: 275.0,
      },
      {
        name: "Adaptive Attack",
        value: 22.0,
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/basic/Thrill.png",
          name: "Thrill",
          description: "Gain 16 Adaptive Attack",
        },
        {
          icon: "/images/emblem/basic/Swift.png",
          name: "Swift",
          description: "Gain 10% Extra Attack Speed",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/basic/Wilderness_Blessing.png",
          name: "Wilderness Blessing",
          info: "Extra Movement Speed in Jungle and River",
          description:
            "Movement Speed in River and Jungle is increased by 10%. This bonus is halved when in combat with enemy heroes, Lord or Turtle.",
        },
        {
          icon: "/images/emblem/basic/Seasoned_Hunter.png",
          name: "Seasoned Hunter",
          info: "Increase Jungling Speed",
          description:
            "Damage against Lord and Turtle is increased by 15%. This bonus is halved against regular Creeps and doesn't affect the damage of Retribution",
        },
      ],
      core: [
        {
          icon: "/images/emblem/basic/Impure_Rage.png",
          name: "Impure Rage",
          info: "Extra Skill Damage & Restore Mana on Hit",
          description:
            "Dealing damage with skills deals 4% of target's Max HP extra Adaptive Damage and restores 2% Mana on hit.",
          infoDesc:
            "If the hero does not use Mana, restore 1% HP instead. The extra Adaptive Damage dealt to non-hero units is up to 120.",
          cooldown: 5,
        },
        {
          icon: "/images/emblem/basic/Quantum_Charge.png",
          name: "Quantum Charge",
          info: "Basic Attack Grant HP Regen & Speed Up",
          description:
            "Dealing damage with Basic Attack increases Movement Speed by 30% for 1.5s and restores 75-180 HP (scales with level).",
          cooldown: 8,
        },
        {
          icon: "/images/emblem/basic/War_Cry.png",
          name: "War Cry",
          info: "Increased Sustained Damage",
          description:
            "After every 3 separate Basic Attacks or Skills hit an enemy hero, all damage dealt increases by 8% for 6s.",
          infoDesc:
            "A single Basic Attack or Skill that deals damage multiple times only counts as 1.",
          cooldown: 6,
        },
        {
          icon: "/images/emblem/basic/Temporal_Reign.png",
          name: "Temporal Reign",
          info: "Non-Ultimate Skills Cooldown Reduction",
          description:
            "The next Ultimate cast decreases other active skills remaining cooldowns by 1.5 time within 4 seconds.",
          infoDesc: "This only applies to the hero themselves.",
          cooldown: 20,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/tank/Custom_Tank_Emblem.png",
    name: "Custom Tank Emblem",
    attributes: [
      {
        name: "HP",
        value: 500.0,
      },
      {
        name: "Hybrid Defense",
        value: 10.0,
      },
      {
        name: "HP Regen",
        value: 4.0,
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/tank/Vitality.png",
          name: "Vitality",
          description: "Gain 225 extra Max HP",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/tank/Tenacity.png",
          name: "Tenacity",
          info: "Increase Defense at Low HP",
          description:
            "When HP is below 50%, Physical & Magic Defense are increased by 15.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/tank/Concussive_Blast.png",
          name: "Concussive Blast",
          info: "HP-Based AOE Damage",
          description:
            "After the next Basic Attack, deal 100 (+7% Total HP) Magic Damage to nearby enemies.",
          cooldown: 15,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/assassin/Custom_Assassin_Emblem.png",
    name: "Custom Assassin Emblem",
    attributes: [
      {
        name: "Adaptive Penetration",
        value: 14.0,
      },
      {
        name: "Adaptive Attack",
        value: 10.0,
      },
      {
        name: "Movement Speed",
        value: "3.0%",
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/assassin/Rupture.png",
          name: "Rupture",
          description: "Gain 5 Adaptive Penetration",
          infoDesc:
            "Gain Physical Penetration if extra Physical Attack is higher than extra Magic Power; otherwise, gain Magic Penetration",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/assassin/Master_Assassin.png",
          name: "Master Assassin",
          info: "Increase Damage to Lone Hero.",
          description:
            "If there is only one enemy hero nearby, damage dealt to them is increased by 7%.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/assassin/Killing_Spree.png",
          name: "Killing Spree",
          info: "Regen and Speed Up After Slain",
          description:
            "After Killing an enemy hero, instanly recover 15% of Lost HP and gain 20% Movement Speed.",
          duration: 3,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/mage/Custom_Mage_Emblem.png",
    name: "Custom Mage Emblem",
    attributes: [
      {
        name: "Magic Power",
        value: 30.0,
      },
      {
        name: "Cooldown Reduction",
        value: "5.0%",
      },
      {
        name: "Magic Penetration",
        value: 8.0,
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/mage/Inspire.png",
          name: "Inspire",
          description: "Gain 5% extra Cooldown Reduction",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/mage/Bargain_Hunter.png",
          name: "Bargain Hunter",
          info: "Reduce Equipment Cost",
          description: "Equipment can be purcased at 95% of their base price.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/mage/Lethal_Ignition.png",
          name: "Lethal Ignition",
          info: "Extra Damage on Multi-Hits",
          description:
            "Dealing damage greater than 7% of an enemy hero's Max HP 3 times within 5s will scorch the target for an additional 162-750 Adaptive Damage (scales with level).",
          cooldown: 15,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/fighter/Custom_Fighter_Emblem.png",
    name: "Custom Fighter Emblem",
    attributes: [
      {
        name: "Spell Vamp",
        value: "10.0%",
      },
      {
        name: "Adaptive Attack",
        value: 22.0,
      },
      {
        name: "Hybrid Defense",
        value: 6.0,
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/fighter/Firmness.png",
          name: "Firmness",
          description: "Gain 6 extra Physical & Magic Defense",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/fighter/Festival_of_Blood.png",
          name: "Festival of Blood",
          info: "Gain Extra Spell Vamp",
          description:
            "Gain 6% Spell Vamp. Each hero kill or assis grants an additional 0.5% Spell Vamp, up to 8 stacks.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/fighter/Brave_Smite.png",
          name: "Brave Smite",
          info: "Skill Damage Grants HP Regen",
          description:
            "Dealing skill damage to an enemy hero recovers 5% of Max HP",
          cooldown: 6,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/support/Custom_Support_Emblem.png",
    name: "Custom Support Emblem",
    attributes: [
      {
        name: "Healing Effect",
        value: "12.0%",
      },
      {
        name: "Cooldown Reduction",
        value: "10.0%",
      },
      {
        name: "Movement Speed",
        value: "6.0%",
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/support/Agility.png",
          name: "Agility",
          description: "Gain 4% extra Movement Speed",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/support/Pull_Yourself_Together.png",
          name: "Pull Yourself Together",
          info: "Reduce Battle Spell & Active Equipment CD",
          description:
            "Cooldowns of Battle Spells and Equipment's active skills are reduce by 15%.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/support/Focusing_Mark.png",
          name: "Focusing Mark",
          info: "Enhance Ally Damage",
          description:
            "Dealing damage to an enemy hero increases allied heroes' damage to them by 6% for 3s.",
          cooldown: 4,
        },
      ],
    },
  },
  {
    icon: "/images/emblem/marksman/Custom_Marksman_Emblem.png",
    name: "Custom Marksman Emblem",
    attributes: [
      {
        name: "Attack Speed",
        value: "15.0%",
      },
      {
        name: "Adaptive Attack",
        value: 16.0,
      },
      {
        name: "Lifesteal",
        value: "5.0%",
      },
    ],
    talents: {
      standard: [
        {
          icon: "/images/emblem/marksman/Fatal.png",
          name: "Fatal",
          description:
            "Gain 5% extra Critical Chance and 10% extra Critical Damage.",
        },
      ],
      advanced: [
        {
          icon: "/images/emblem/marksman/Weapon_Master.png",
          name: "Weapon Master",
          info: "Bonus Extra Attack",
          description:
            "Physical Attack and Magic Power gained from equipment, emblem, talents, and skills are increased by 5%.",
        },
      ],
      core: [
        {
          icon: "/images/emblem/marksman/Weakness_Finder.png",
          name: "Weakness Finder",
          info: "Basic Attacks Slow an Enemy",
          description:
            "Basic Attacks slow an enemy by 50% and reduce their Attack Speed by 30%.",
          duration: 1,
          cooldown: 10,
          infoCooldown: "Each Basic Attack reduces it by 1s down to 3s.",
        },
      ],
    },
  },
];

const EmblemTalent = () => {
  const [activeEmblem, setActiveEmblem] = useState({});
  const [hoveredTalent, setHoveredTalent] = useState(null);

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
                    activeEmblem === emblem &&
                    "bg-white/20 drop-shadow-[0_0px_5px_white]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        {activeEmblem && Object.keys(activeEmblem).length > 0 && (
          <div className="w-full min-h-[500px] flex mt-5">
            <div className="basis-2/12 p-4 bg-slate-950 text-soft-white divide-y">
              <h3 className="text-center text-2xl pb-1">Attributes</h3>
              <div className="flex flex-col pt-4 space-y-5">
                {activeEmblem.attributes.map((attribute) => (
                  <div key={attribute.name} className="flex flex-col">
                    <span className="text-base">{attribute.name}</span>
                    <span className="text-lg text-yellow-200">+{attribute.value}</span>
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
                  {activeEmblem.talents.standard.map((talent) => (
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
                  {activeEmblem.talents.advanced.map((talent) => (
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
                  {activeEmblem.talents.core.map((talent) => (
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
