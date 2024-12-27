module.exports = {
  where: { id: 84 },
  update: {},
  create: {
    id: 84,
    name: "Ling",
    alias: "Cyan Finch",
    icon: "/images/heroes/84/Hero841-icon.png",
    portrait: "/images/heroes/84/Hero841-portrait.png",
    splashArt: "/images/heroes/84/Hero841-splashart.jpg",
    abilities: {
      create: [
        {
          type: "Passive",
          name: "Cloud Walker",
          icon: "/images/heroes/84/abilities/Hero84-passive.png",
          description:
            "Ling's superb Lightness Skill allows him to leap among walls. He gains {lightnessPointOnWall} extra Lightness Points per seconds when he's on a wall and {lightnessPointAtDmg} extra Lightness Points each time he deals damage.\nLing gains {gainsCritChance} times Critical Chance from all sources but only has {baseCritDamage} Critical Damage.",
          descValues: {
            lightnessPointOnWall: 4,
            lightnessPointAtDmg: 5,
            gainsCritChance: 1.6,
            baseCritDamage: "140%",
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Lightness Points" },
                create: { name: "Lightness Points", color: "#EAC56B" },
              },
              {
                where: { name: "Critical Chance" },
                create: { name: "Critical Chance", color: "#EAC56B" },
              },
              {
                where: { name: "Critical Damage" },
                create: { name: "Critical Damage", color: "#EAC56B" },
              },
            ],
          },
          abilityTags: {
            connect: { id: 1 },
          },
        },
        {
          type: "Skill 1",
          name: "Finch Poise",
          icon: "/images/heroes/84/abilities/Hero84-skill1.png",
          description:
            "Passive: Ling's Critical Chance is permanently increased by {increaseCritChance}.\nActive: Ling cast hist Lightness Skill, leaping onto the designated wall, entering Half-Stealth state, restoring Lightness Points more quickly and gaining {gainMovementSpeed} Movement Speed. If Ling receives damage, he will leave the Half-Stealth state. If he is controlled, he will fall onto the ground and be slowed by {slowedWhenFall} for {durationSlowed}s. When using this skill to jump from a wall to another, it will reset the Cooldown and refresh the Half-Stealth state.",
          descValues: {
            increaseCritChance: "2.5%",
            gainMovementSpeed: "30%",
            slowedWhenFall: "30%",
            durationSlowed: 2,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Critical Chance" },
                create: { name: "Critical Chance", color: "#EAC56B" },
              },
              {
                where: { name: "Half-Stealth" },
                create: { name: "Half-Stealth", color: "#EAC56B" },
              },
              {
                where: { name: "Lightness Points" },
                create: { name: "Lightness Points", color: "#EAC56B" },
              },
            ],
          },
          abilityScalings: {
            create: [
              {
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
                type: "Cooldown",
                levelValues: {
                  all: 20.0,
                },
              },
              {
                type: "Energy Cost",
                levelValues: {
                  all: 30,
                },
              },
            ],
          },
          abilityTags: {
            connect: [{ id: 10 }, { id: 1 }],
          },
        },
        {
          type: "Skill 2",
          name: "Defiant Sword",
          icon: "/images/heroes/84/abilities/Hero84-skill2_normal.png",
          description:
            "Ling charges in the target direction and stabs nearby enemies, dealing them {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage.\nIf Ling cast this skill when he's on the wall (no energy cost), he'll dash to the target location on the ground, dealing {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage to enemies in the area and slowing them by {slowEnemies} for {durationSlow}s.\nDefiant Sword is regarded as Basic Attack.",
          descValues: {
            baseDamage: 300,
            scallingAttack: "50%",
            slowEnemies: "30%",
            durationSlow: "1.5",
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Physical Damage" },
                create: { name: "Physical Damage", color: "#FB1F1F" },
              },
              {
                where: { name: "Basic Attack" },
                create: { name: "Basic Attack", color: "#EAC56B" },
              },
            ],
          },
          abilityScalings: {
            create: [
              {
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
                type: "Cooldown",
                levelValues: {
                  all: 2.5,
                },
              },
              {
                type: "Energy Cost",
                levelValues: {
                  all: 35,
                },
              },
              {
                type: "Attack Effects",
                levelValues: {
                  all: "100%",
                },
              },
            ],
          },
          abilityTags: {
            connect: [{ id: 13 }, { id: 10 }],
          },
        },
        {
          type: "Ultimate",
          name: "Tempest of Blades",
          icon: "/images/heroes/84/abilities/Hero84-skill3.png",
          description:
            "Ling leaps into the air, becoming Incivible and gaining {gainMovementSpeed} extra Movement Speed for {durationMovementSpeed}s. He ignores obstacles when in the air. He then lands on the ground, dealing {baseDamage} (+{scallingAttack} Total Physical Attack) Physical Damage to enemies in the area, knocking those in the center airborne for {airborneDuration}s, and creating a Sword Field for {swordFieldDuration}s.\nFour Tempest of Blades will also appear on the edge of the Sword Field. Ling can touch them to reduce the Cooldown of Finch Poise by {reduceCDFinchPoise}s, reset Cooldown of Defiant Sword, and gain {gainLightnessPoints} Lightness Points.",
          descValues: {
            gainMovementSpeed: "10%",
            durationMovementSpeed: 1.5,
            baseDamage: 250,
            scallingAttack: "100%",
            airborneDuration: 1,
            swordFieldDuration: 8,
            reduceCDFinchPoise: 4,
            gainLightnessPoints: 25,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Physical Damage" },
                create: { name: "Physical Damage", color: "#FB1F1F" },
              },
              {
                where: { name: "Incivible" },
                create: { name: "Incivible", color: "#EAC56B" },
              },
              {
                where: { name: "Airborne" },
                create: { name: "Airborne", color: "#EAC56B" },
              },
              {
                where: { name: "Tempest of Blades" },
                create: { name: "Tempest of Blades", color: "#EAC56B" },
              },
              {
                where: { name: "Finch Poise" },
                create: { name: "Finch Poise", color: "#EAC56B" },
              },
              {
                where: { name: "Defiant Sword" },
                create: { name: "Defiant Sword", color: "#EAC56B" },
              },
              {
                where: { name: "Lightness Points" },
                create: { name: "Lightness Points", color: "#EAC56B" },
              },
            ],
          },
          abilityScalings: {
            create: [
              {
                type: "Base Damage",
                levelValues: {
                  lvl1: 250,
                  lvl2: 350,
                  lvl3: 450,
                },
              },
              {
                type: "Cooldown",
                levelValues: {
                  lvl1: 52.0,
                  lvl2: 49.0,
                  lvl3: 46.0,
                },
              },
            ],
          },
          abilityTags: {
            connect: [{ id: 14 }, { id: 22 }],
          },
        },
      ],
    },
    roles: {
      connect: { id: 3 },
    },
    specialities: {
      connect: [{ id: 13 }, { id: 7 }],
    },
    positions: {
      connect: { id: 2 },
    },
    durability: 5,
    offense: 6,
    controlEffect: 3,
    difficulty: 7,
    abilityResource: "Energy",
    abilityResourceColor: "#dddcdc",
    abilityResourceName: "Lightness Points",
    skins: {
      create: [
        {
          name: "Fiery Dance",
          icon: "public/images/heroes/84/skins/Hero842-icon.png",
          portrait: "public/images/heroes/84/skins/Hero842-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero842-splashart.jpg",
        },
        {
          name: "Street Punk",
          icon: "public/images/heroes/84/skins/Hero843-icon.png",
          portrait: "public/images/heroes/84/skins/Hero843-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero843-splashart.jpg",
          skinTag: {
            connect: {
              name: "Starlight",
            },
          },
        },
        {
          name: "Night Shade",
          icon: "public/images/heroes/84/skins/Hero844-icon.png",
          portrait: "public/images/heroes/84/skins/Hero844-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero844-splashart.jpg",
          skinTag: {
            connect: {
              name: "Dragon Tamer",
            },
          },
        },
        {
          name: "Cosmo Guard",
          icon: "public/images/heroes/84/skins/Hero845-icon.png",
          portrait: "public/images/heroes/84/skins/Hero845-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero845-splashart.jpg",
          skinTag: {
            connect: {
              name: "Special",
            },
          },
        },
        {
          name: "Serene Plume",
          icon: "public/images/heroes/84/skins/Hero846-icon.png",
          portrait: "public/images/heroes/84/skins/Hero846-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero846-splashart.jpg",
          skinTag: {
            connect: {
              name: "Collector",
            },
          },
        },
        {
          name: "M-World Ling",
          icon: "public/images/heroes/84/skins/Hero847-icon.png",
          portrait: "public/images/heroes/84/skins/Hero847-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero847-splashart.jpg",
          skinTag: {
            connect: {
              name: "M-World",
            },
          },
        },
        {
          name: "Lord Shen",
          icon: "public/images/heroes/84/skins/Hero848-icon.png",
          portrait: "public/images/heroes/84/skins/Hero848-portrait.png",
          splashArt: "public/images/heroes/84/skins/Hero848-splashart.jpg",
          skinTag: {
            connect: {
              name: "Kung Fu Panda",
            },
          },
        },
      ],
    },
  },
}