const emblem = [
  {
    name: "Basic Common Emblem",
    icon: "/images/emblem/basic/Basic_Common_Emblem.png",
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
  },
  {
    name: "Custom Tank Emblem",
    icon: "/images/emblem/tank/Custom_Tank_Emblem.png",
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
  },
  {
    name: "Custom Assassin Emblem",
    icon: "/images/emblem/assassin/Custom_Assassin_Emblem.png",
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
  },
  {
    name: "Custom Mage Emblem",
    icon: "/images/emblem/mage/Custom_Mage_Emblem.png",
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
  },
  {
    name: "Custom Fighter Emblem",
    icon: "/images/emblem/fighter/Custom_Fighter_Emblem.png",
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
  },
  {
    name: "Custom Support Emblem",
    icon: "/images/emblem/support/Custom_Support_Emblem.png",
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
  },
  {
    name: "Custom Marksman Emblem",
    icon: "/images/emblem/marksman/Custom_Marksman_Emblem.png",
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
  },
];

const talents = [
  // Basic Common Emblem
  {
    emblemId: 1,
    type: "standard",
    name: "Thrill",
    icon: "/images/emblem/basic/Thrill.png",
    description: "Gain 16 Adaptive Attack",
  },
  {
    emblemId: 1,
    type: "standard",
    name: "Swift",
    icon: "/images/emblem/basic/Swift.png",
    description: "Gain 10% Extra Attack Speed",
  },
  {
    emblemId: 1,
    type: "advanced",
    name: "Wilderness Blessing",
    icon: "/images/emblem/basic/Wilderness_Blessing.png",
    info: "Extra Movement Speed in Jungle and River",
    description:
      "Movement Speed in River and Jungle is increased by 10%. This bonus is halved when in combat with enemy heroes, Lord or Turtle.",
  },
  {
    emblemId: 1,
    type: "advanced",
    name: "Seasoned Hunter",
    icon: "/images/emblem/basic/Seasoned_Hunter.png",
    info: "Increase Jungling Speed",
    description:
      "Damage against Lord and Turtle is increased by 15%. This bonus is halved against regular Creeps and doesn't affect the damage of Retribution",
  },
  {
    emblemId: 1,
    type: "core",
    name: "Impure Rage",
    icon: "/images/emblem/basic/Impure_Rage.png",
    info: "Extra Skill Damage & Restore Mana on Hit",
    description:
      "Dealing damage with skills deals 4% of target's Max HP extra Adaptive Damage and restores 2% Mana on hit.",
    infoDesc:
      "If the hero does not use Mana, restore 1% HP instead. The extra Adaptive Damage dealt to non-hero units is up to 120.",
    cooldown: 5,
  },
  {
    emblemId: 1,
    type: "core",
    name: "Quantum Charge",
    icon: "/images/emblem/basic/Quantum_Charge.png",
    info: "Basic Attack Grant HP Regen & Speed Up",
    description:
      "Dealing damage with Basic Attack increases Movement Speed by 30% for 1.5s and restores 75-180 HP (scales with level).",
    cooldown: 8,
  },
  {
    emblemId: 1,
    type: "core",
    name: "War Cry",
    icon: "/images/emblem/basic/War_Cry.png",
    info: "Increased Sustained Damage",
    description:
      "After every 3 separate Basic Attacks or Skills hit an enemy hero, all damage dealt increases by 8% for 6s.",
    infoDesc:
      "A single Basic Attack or Skill that deals damage multiple times only counts as 1.",
    cooldown: 6,
  },
  {
    emblemId: 1,
    type: "core",
    name: "Temporal Reign",
    icon: "/images/emblem/basic/Temporal_Reign.png",
    info: "Non-Ultimate Skills Cooldown Reduction",
    description:
      "The next Ultimate cast decreases other active skills remaining cooldowns by 1.5 time within 4 seconds.",
    infoDesc: "This only applies to the hero themselves.",
    cooldown: 20,
  },

  // Custom Tank Emblem
  {
    emblemId: 2,
    type: "standard",
    name: "Vitality",
    icon: "/images/emblem/tank/Vitality.png",
    description: "Gain 225 extra Max HP",
  },
  {
    emblemId: 2,
    type: "advanced",
    name: "Tenacity",
    icon: "/images/emblem/tank/Tenacity.png",
    info: "Increase Defense at Low HP",
    description:
      "When HP is below 50%, Physical & Magic Defense are increased by 15.",
  },
  {
    emblemId: 2,
    type: "core",
    name: "Concussive Blast",
    icon: "/images/emblem/tank/Concussive_Blast.png",
    info: "HP-Based AOE Damage",
    description:
      "After the next Basic Attack, deal 100 (+7% Total HP) Magic Damage to nearby enemies.",
    cooldown: 15,
  },

  // Custom Assassin Emblem
  {
    emblemId: 3,
    type: "standard",
    name: "Rupture",
    icon: "/images/emblem/assassin/Rupture.png",
    description: "Gain 5 Adaptive Penetration",
    infoDesc:
      "Gain Physical Penetration if extra Physical Attack is higher than extra Magic Power; otherwise, gain Magic Penetration",
  },
  {
    emblemId: 3,
    type: "advanced",
    name: "Master Assassin",
    icon: "/images/emblem/assassin/Master_Assassin.png",
    info: "Increase Damage to Lone Hero.",
    description:
      "If there is only one enemy hero nearby, damage dealt to them is increased by 7%.",
  },
  {
    emblemId: 3,
    type: "core",
    name: "Killing Spree",
    icon: "/images/emblem/assassin/Killing_Spree.png",
    info: "Regen and Speed Up After Slain",
    description:
      "After Killing an enemy hero, instanly recover 15% of Lost HP and gain 20% Movement Speed.",
    duration: 3,
  },

  // Custom Mage Emblem
  {
    emblemId: 4,
    type: "standard",
    name: "Inspire",
    icon: "/images/emblem/mage/Inspire.png",
    description: "Gain 5% extra Cooldown Reduction",
  },
  {
    emblemId: 4,
    type: "advanced",
    name: "Bargain Hunter",
    icon: "/images/emblem/mage/Bargain_Hunter.png",
    info: "Reduce Equipment Cost",
    description: "Equipment can be purcased at 95% of their base price.",
  },
  {
    emblemId: 4,
    type: "core",
    name: "Lethal Ignition",
    icon: "/images/emblem/mage/Lethal_Ignition.png",
    info: "Extra Damage on Multi-Hits",
    description:
      "Dealing damage greater than 7% of an enemy hero's Max HP 3 times within 5s will scorch the target for an additional 162-750 Adaptive Damage (scales with level).",
    cooldown: 15,
  },

  // Custom Fighter Emblem
  {
    emblemId: 5,
    type: "standard",
    name: "Firmness",
    icon: "/images/emblem/fighter/Firmness.png",
    description: "Gain 6 extra Physical & Magic Defense",
  },
  {
    emblemId: 5,
    type: "advanced",
    name: "Festival of Blood",
    icon: "/images/emblem/fighter/Festival_of_Blood.png",
    info: "Gain Extra Spell Vamp",
    description:
      "Gain 6% Spell Vamp. Each hero kill or assis grants an additional 0.5% Spell Vamp, up to 8 stacks.",
  },
  {
    emblemId: 5,
    type: "core",
    name: "Brave Smite",
    icon: "/images/emblem/fighter/Brave_Smite.png",
    info: "Skill Damage Grants HP Regen",
    description: "Dealing skill damage to an enemy hero recovers 5% of Max HP",
    cooldown: 6,
  },

  // Custom Support Emblem
  {
    emblemId: 6,
    type: "standard",
    name: "Agility",
    icon: "/images/emblem/support/Agility.png",
    description: "Gain 4% extra Movement Speed",
  },
  {
    emblemId: 6,
    type: "advanced",
    name: "Pull Yourself Together",
    icon: "/images/emblem/support/Pull_Yourself_Together.png",
    info: "Reduce Battle Spell & Active Equipment CD",
    description:
      "Cooldowns of Battle Spells and Equipment's active skills are reduce by 15%.",
  },
  {
    emblemId: 6,
    type: "core",
    name: "Focusing Mark",
    icon: "/images/emblem/support/Focusing_Mark.png",
    info: "Enhance Ally Damage",
    description:
      "Dealing damage to an enemy hero increases allied heroes' damage to them by 6% for 3s.",
    cooldown: 4,
  },

  // Custom Marksman Emblem
  {
    emblemId: 7,
    type: "standard",
    name: "Fatal",
    icon: "/images/emblem/marksman/Fatal.png",
    description: "Gain 5% extra Critical Chance and 10% extra Critical Damage.",
  },
  {
    emblemId: 7,
    type: "advanced",
    name: "Weapon Master",
    icon: "/images/emblem/marksman/Weapon_Master.png",
    info: "Bonus Extra Attack",
    description:
      "Physical Attack and Magic Power gained from equipment, emblem, talents, and skills are increased by 5%.",
  },
  {
    emblemId: 7,
    type: "core",
    name: "Weakness Finder",
    icon: "/images/emblem/marksman/Weakness_Finder.png",
    info: "Basic Attacks Slow an Enemy",
    description:
      "Basic Attacks slow an enemy by 50% and reduce their Attack Speed by 30%.",
    duration: 1,
    cooldown: 10,
    infoCooldown: "Each Basic Attack reduces it by 1s down to 3s.",
  },
];

module.exports = { emblem, talents };
