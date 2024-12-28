export const dataHero = {
  id: 84,
  name: "Ling",
  alias: "Cyan Finch",
  icon: "/images/heroes/84/Hero841-icon.png",
  portrait: "/images/heroes/84/Hero841-portrait.png",
  splashArt: "/images/heroes/84/Hero841-splashart.jpg",
  durability: 5,
  offense: 6,
  controlEffect: 3,
  difficulty: 7,
  abilityResource: "Energy",
  abilityResourceColor: "#dddcdc",
  abilityResourceName: "Lightness Points",
  roles: [
    {
      id: 3,
      name: "Assassin",
      icon: "/images/roles/assassin_icon.png",
    },
  ],
  positions: [
    {
      id: 2,
      name: "Jungler",
      icon: "/images/positions/jungler_icon.png",
    },
  ],
  specialities: [
    {
      id: 7,
      name: "Burst",
    },
    {
      id: 13,
      name: "Chase",
    },
  ],
  abilities: [
    {
      id: 8,
      heroId: 84,
      type: "Passive",
      name: "Cloud Walker",
      icon: "/images/heroes/84/abilities/Hero84-passive.png",
      description:
        "Ling's superb Lightness Skill allows him to leap among walls. He gains {lightnessPointOnWall} extra Lightness Points per seconds when he's on a wall and {lightnessPointAtDmg} extra Lightness Points each time he deals damage.\nLing gains {gainsCritChance} times Critical Chance from all sources but only has {baseCritDamage} Critical Damage.",
      descValues: {
        baseCritDamage: "140%",
        gainsCritChance: 1.6,
        lightnessPointAtDmg: 5,
        lightnessPointOnWall: 4,
      },
      abilityScalings: [],
      skillTerms: [
        {
          id: 11,
          name: "Lightness Points",
          color: "#EAC56B",
        },
        {
          id: 12,
          name: "Critical Chance",
          color: "#EAC56B",
        },
        {
          id: 13,
          name: "Critical Damage",
          color: "#EAC56B",
        },
      ],
      abilityTags: [
        {
          id: 1,
          name: "Buff",
          color: "#4f9cb8",
        },
      ],
    },
    {
      id: 9,
      heroId: 84,
      type: "Skill 1",
      name: "Finch Poise",
      icon: "/images/heroes/84/abilities/Hero84-skill1.png",
      description:
        "Passive: Ling's Critical Chance is permanently increased by {increaseCritChance}.\nActive: Ling cast hist Lightness Skill, leaping onto the designated wall, entering Half-Stealth state, restoring Lightness Points more quickly and gaining {gainMovementSpeed} Movement Speed. If Ling receives damage, he will leave the Half-Stealth state. If he is controlled, he will fall onto the ground and be slowed by {slowedWhenFall} for {durationSlowed}s. When using this skill to jump from a wall to another, it will reset the Cooldown and refresh the Half-Stealth state.",
      descValues: {
        durationSlowed: 2,
        slowedWhenFall: "30%",
        gainMovementSpeed: "30%",
        increaseCritChance: "2.5%",
      },
      abilityScalings: [
        {
          id: 20,
          abilityId: 9,
          type: "Critical Chance",
          levelValues: {
            lvl1: "2.5%",
            lvl2: "4.5%",
            lvl3: "6.5%",
            lvl4: "8.5%",
            lvl5: "10.5%",
            lvl6: "12.5%",
          },
        },
        {
          id: 21,
          abilityId: 9,
          type: "Cooldown",
          levelValues: {
            all: 20,
          },
        },
        {
          id: 22,
          abilityId: 9,
          type: "Energy Cost",
          levelValues: {
            all: 30,
          },
        },
      ],
      skillTerms: [
        {
          id: 11,
          name: "Lightness Points",
          color: "#EAC56B",
        },
        {
          id: 12,
          name: "Critical Chance",
          color: "#EAC56B",
        },
        {
          id: 14,
          name: "Half-Stealth",
          color: "#EAC56B",
        },
      ],
      abilityTags: [
        {
          id: 10,
          name: "Mobility",
          color: "#a269c7",
        },
        {
          id: 1,
          name: "Buff",
          color: "#4f9cb8",
        },
      ],
    },
    {
      id: 10,
      heroId: 84,
      type: "Skill 2",
      name: "Defiant Sword",
      icon: "/images/heroes/84/abilities/Hero84-skill2_normal.png",
      description:
        "Ling charges in the target direction and stabs nearby enemies, dealing them {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage.\nIf Ling cast this skill when he's on the wall (no energy cost), he'll dash to the target location on the ground, dealing {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage to enemies in the area and slowing them by {slowEnemies} for {durationSlow}s.\nDefiant Sword is regarded as Basic Attack.",
      descValues: {
        baseDamage: 300,
        slowEnemies: "30%",
        durationSlow: "1.5",
        scallingAttack: "50%",
      },
      abilityScalings: [
        {
          id: 23,
          abilityId: 10,
          type: "Base Damage",
          levelValues: {
            lvl1: 300,
            lvl2: 320,
            lvl3: 340,
            lvl4: 360,
            lvl5: 380,
            lvl6: 400,
          },
        },
        {
          id: 24,
          abilityId: 10,
          type: "Cooldown",
          levelValues: {
            all: 2.5,
          },
        },
        {
          id: 25,
          abilityId: 10,
          type: "Energy Cost",
          levelValues: {
            all: 35,
          },
        },
        {
          id: 26,
          abilityId: 10,
          type: "Attack Effects",
          levelValues: {
            all: "100%",
          },
        },
      ],
      skillTerms: [
        {
          id: 15,
          name: "Physical Damage",
          color: "#FB1F1F",
        },
        {
          id: 16,
          name: "Basic Attack",
          color: "#EAC56B",
        },
      ],
      abilityTags: [
        {
          id: 13,
          name: "Damage",
          color: "#c77955",
        },
        {
          id: 10,
          name: "Mobility",
          color: "#a269c7",
        },
      ],
    },
    {
      id: 11,
      heroId: 84,
      type: "Ultimate",
      name: "Tempest of Blades",
      icon: "/images/heroes/84/abilities/Hero84-skill3.png",
      description:
        "Ling leaps into the air, becoming Incivible and gaining {gainMovementSpeed} extra Movement Speed for {durationMovementSpeed}s. He ignores obstacles when in the air. He then lands on the ground, dealing {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage to enemies in the area, knocking those in the center airborne for {airborneDuration}s, and creating a Sword Field for {swordFieldDuration}s.\nFour Tempest of Blades will also appear on the edge of the Sword Field. Ling can touch them to reduce the Cooldown of Finch Poise by {reduceCDFinchPoise}s, reset Cooldown of Defiant Sword, and gain {gainLightnessPoints} Lightness Points.",
      descValues: {
        baseDamage: 250,
        scallingAttack: "100%",
        airborneDuration: 1,
        gainMovementSpeed: "10%",
        reduceCDFinchPoise: 4,
        swordFieldDuration: 8,
        gainLightnessPoints: 25,
        durationMovementSpeed: 1.5,
      },
      abilityScalings: [
        {
          id: 27,
          abilityId: 11,
          type: "Base Damage",
          levelValues: {
            lvl1: 250,
            lvl2: 350,
            lvl3: 450,
          },
        },
        {
          id: 28,
          abilityId: 11,
          type: "Cooldown",
          levelValues: {
            lvl1: 52,
            lvl2: 49,
            lvl3: 46,
          },
        },
      ],
      skillTerms: [
        {
          id: 6,
          name: "Incivible",
          color: "#EAC56B",
        },
        {
          id: 11,
          name: "Lightness Points",
          color: "#EAC56B",
        },
        {
          id: 15,
          name: "Physical Damage",
          color: "#FB1F1F",
        },
        {
          id: 17,
          name: "Airborne",
          color: "#EAC56B",
        },
        {
          id: 18,
          name: "Tempest of Blades",
          color: "#EAC56B",
        },
        {
          id: 19,
          name: "Finch Poise",
          color: "#EAC56B",
        },
        {
          id: 20,
          name: "Defiant Sword",
          color: "#EAC56B",
        },
      ],
      abilityTags: [
        {
          id: 14,
          name: "Burst",
          color: "#c77955",
        },
        {
          id: 22,
          name: "CC",
          color: "#cd5d6d",
        },
      ],
    },
  ],
  skins: [
    {
      id: 10,
      heroId: 84,
      name: "Fiery Dance",
      icon: "/images/heroes/84/skins/Hero842-icon.png",
      portrait: "/images/heroes/84/skins/Hero842-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero842-splashart.jpg",
      skinTagId: null,
      skinTag: null,
    },
    {
      id: 11,
      heroId: 84,
      name: "Lord Shen",
      icon: "/images/heroes/84/skins/Hero848-icon.png",
      portrait: "/images/heroes/84/skins/Hero848-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero848-splashart.jpg",
      skinTagId: 54,
      skinTag: {
        id: 54,
        name: "Kung Fu Panda",
        icon: "/images/skin-tag/Kung_Fu_Panda_SkinTag.png",
      },
    },
    {
      id: 12,
      heroId: 84,
      name: "M-World Ling",
      icon: "/images/heroes/84/skins/Hero847-icon.png",
      portrait: "/images/heroes/84/skins/Hero847-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero847-splashart.jpg",
      skinTagId: 13,
      skinTag: {
        id: 13,
        name: "M-World",
        icon: "/images/skin-tag/M-World_SkinTag.png",
      },
    },
    {
      id: 13,
      heroId: 84,
      name: "Serene Plume",
      icon: "/images/heroes/84/skins/Hero846-icon.png",
      portrait: "/images/heroes/84/skins/Hero846-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero846-splashart.jpg",
      skinTagId: 32,
      skinTag: {
        id: 32,
        name: "Collector",
        icon: "/images/skin-tag/Collector_SkinTag.png",
      },
    },
    {
      id: 14,
      heroId: 84,
      name: "Cosmo Guard",
      icon: "/images/heroes/84/skins/Hero845-icon.png",
      portrait: "/images/heroes/84/skins/Hero845-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero845-splashart.jpg",
      skinTagId: 2,
      skinTag: {
        id: 2,
        name: "Special",
        icon: "/images/skin-tag/Special_SkinTag.png",
      },
    },
    {
      id: 15,
      heroId: 84,
      name: "Night Shade",
      icon: "/images/heroes/84/skins/Hero844-icon.png",
      portrait: "/images/heroes/84/skins/Hero844-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero844-splashart.jpg",
      skinTagId: 38,
      skinTag: {
        id: 38,
        name: "Dragon Tamer",
        icon: "/images/skin-tag/Dragon_Tamer_SkinTag.png",
      },
    },
    {
      id: 16,
      heroId: 84,
      name: "Street Punk",
      icon: "/images/heroes/84/skins/Hero843-icon.png",
      portrait: "/images/heroes/84/skins/Hero843-portrait.png",
      splashArt: "/images/heroes/84/skins/Hero843-splashart.jpg",
      skinTagId: 21,
      skinTag: {
        id: 21,
        name: "Starlight",
        icon: "/images/skin-tag/Starlight_SkinTag.png",
      },
    },
  ],
};
