module.exports = {
  data: {
    id: 116,
    name: "Julian",
    alias: "Scarlet Raven",
    icon: "/images/heroes/116/Hero1161-icon.png",
    portrait: "/images/heroes/116/Hero1161-portrait.png",
    splashArt: "/images/heroes/116/Hero1161-splashart.png",
    abilities: {
      create: [
        {
          type: "Passive",
          name: "Smith's Legacy",
          icon: "/images/heroes/116/abilities/Hero116-passive.png",
          description:
            "After casting two different skills, Julian enhances his third skill. Casting the enhanced skill make all his skill go on a {cooldownAtLvl1}-{cooldownAtLvl15}s Cooldown (decreases whis his level).\nAfter Casting any skill, his Basic Attacks for the next {durationEnhancedBasicAttack}s will deal {baseDamage} (+{scallingPhysical} Total Physical Attack) (+{scallingMPower} Total Magic Power) Magic Damage and pull the target toward him. Casting another skill extends the duration.\nJulian gains {extraHybridLifesteal} extra Hybrid Lifesteal for {durationHybridLifesteal}s each time he hits an enemy hero with his skills (up to {stacksHybridLifesteal} stacks).",
          descValues: {
            cooldownAtLvl1: 9,
            cooldownAtLvl15: 6,
            durationEnhancedBasicAttack: 2,
            baseDamage: 100,
            scallingPhysical: "100%",
            scallingMPower: "100%",
            extraHybridLifesteal: "15%",
            durationHybridLifesteal: 5,
            stacksHybridLifesteal: 3,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Physical Attack" },
                create: { name: "Physical Attack", color: "#fba51f" },
              },
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
              {
                where: { name: "Basic Attacks" },
                create: { name: "Basic Attacks", color: "#EAC56B" },
              },
              {
                where: { name: "Hybrid Lifesteal" },
                create: { name: "Hybrid Lifesteal", color: "#EAC56B" },
              },
            ],
          },
          abilityTags: {
            create: {
              abilityTagId: 1,
            },
          },
        },
        {
          type: "Skill 1",
          name: "Scythe",
          icon: "/images/heroes/116/abilities/Hero116-skill1.png",
          description:
            "Julian hurls a flying scythe in the target direction, dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage to enemies along the way and slowing them by {slowEnemies} for {durationSlow}s.\nThe scythe disappears upon hitting a non-minion enemy.",
          descValues: {
            baseDamage: 420,
            scallingAttack: "140%",
            slowEnemies: "30%",
            durationSlow: 1,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 420,
                lvl2: 490,
                lvl3: 560,
                lvl4: 630,
                lvl5: 700,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 30,
                lvl2: 35,
                lvl3: 40,
                lvl4: 45,
                lvl5: 50,
              },
            },
            {
              type: "Spell Vamp Ratio",
              levelValues: {
                all: "50%",
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 13, orderIndex: 0 },
              { abilityTagId: 23, orderIndex: 1 },
            ],
          },
        },
        {
          type: "Skill 1",
          name: "Enhanced Scythe",
          icon: "/images/heroes/116/abilities/Hero116-skill1_enhanced.png",
          description:
            "Julian hurls enhanced scythes in the target direction, dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage to enemies along the way and slowing them by {slowEnemies} for {durationSlow}s.\nUpon hitting a non-minion enemy or reaching the maximum distance, the scythes will continue to fly at a lower speed, dealing {sustainedDamage} (+{scallingSustainedDamage} Total Magic Power) Magic Damage every {intervalDamage}s to nearby enemies (up to {maxTimes} times).",
          descValues: {
            baseDamage: 420,
            scallingAttack: "140%",
            slowEnemies: "50%",
            durationSlow: 1,
            sustainedDamage: 80,
            scallingSustainedDamage: "30%",
            intervalDamage: 0.3,
            maxTimes: 9,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 420,
                lvl2: 490,
                lvl3: 560,
                lvl4: 630,
                lvl5: 700,
              },
            },
            {
              type: "Sustained Damage",
              levelValues: {
                lvl1: 80,
                lvl2: 105,
                lvl3: 130,
                lvl4: 155,
                lvl5: 180,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 60,
                lvl2: 70,
                lvl3: 80,
                lvl4: 90,
                lvl5: 100,
              },
            },
            {
              type: "Spell Vamp Ratio",
              levelValues: {
                all: "50%",
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 13, orderIndex: 0 },
              { abilityTagId: 23, orderIndex: 1 },
            ],
          },
        },
        {
          type: "Skill 2",
          name: "Sword",
          icon: "/images/heroes/116/abilities/Hero116-skill2.png",
          description:
            "Julian summons a flying sword and dashed in the target direction, dealing 400 (+80% Total Magic Power) Magic Damage to enemies along the way.",
          descValues: {
            baseDamage: 400,
            scallingAttack: "80%",
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 400,
                lvl2: 435,
                lvl3: 470,
                lvl4: 505,
                lvl5: 540,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 30,
                lvl2: 35,
                lvl3: 40,
                lvl4: 45,
                lvl5: 50,
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 10, orderIndex: 0 },
              { abilityTagId: 13, orderIndex: 1 },
            ],
          },
        },
        {
          type: "Skill 2",
          name: "Enhanced Sword",
          icon: "/images/heroes/116/abilities/Hero116-skill2_enhanced.png",
          description:
            "Julian summons a large number of flying sword and dashed in the target direction, dealing {sustainedDamage} (+{scallingAttack} Total Magic Power) Magic Damage every {intervalDamage}s to enemies along the way (up to {maxTimes} times).\nJulian Untargetable and Invisible during the dash.",
          descValues: {
            sustainedDamage: 75,
            scallingAttack: "15%",
            intervalDamage: 0.1,
            maxTimes: 9,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
              {
                where: { name: "Untargetable" },
                create: { name: "Untargetable", color: "#EAC56B" },
              },
              {
                where: { name: "Incivible" },
                create: { name: "Incivible", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
            {
              type: "Sustained Damage",
              levelValues: {
                lvl1: 75,
                lvl2: 85,
                lvl3: 95,
                lvl4: 105,
                lvl5: 115,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 60,
                lvl2: 79,
                lvl3: 80,
                lvl4: 90,
                lvl5: 100,
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 10, orderIndex: 0 },
              { abilityTagId: 18, orderIndex: 1 },
            ],
          },
        },
        {
          type: "Skill 3",
          name: "Chain",
          icon: "/images/heroes/116/abilities/Hero116-skill3.png",
          description:
            "Julian cast chains at the target location, dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage to enemies hit after a short delay and Immobilizing them for {durationImmobilizing}s.",
          descValues: {
            baseDamage: 300,
            scallingAttack: "100%",
            durationImmobilizing: 1.2,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
              {
                where: { name: "Immobilizing" },
                create: { name: "Immobilizing", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 300,
                lvl2: 335,
                lvl3: 370,
                lvl4: 405,
                lvl5: 440,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 30,
                lvl2: 35,
                lvl3: 40,
                lvl4: 45,
                lvl5: 50,
              },
            },
            {
              type: "Spell Vamp Ratio",
              levelValues: {
                all: "50%",
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 22, orderIndex: 0 },
              { abilityTagId: 13, orderIndex: 1 },
            ],
          },
        },
        {
          type: "Skill 3",
          name: "Enhanced Chain",
          icon: "/images/heroes/116/abilities/Hero116-skill3_enhanced.png",
          description:
            "Julian casts chains at the target location, dealing {sustainedDamage} (+{scallingSustained} Total Magic Power) Magic damage every {intervalDamage}s to enemies hit and slowing them by {slowEnemies}.\nEnemies that are still in the area at the end of the skill duration will take {enhancedDamage} (+{scallingEnhanced} Total Magic Power) extra Magic Damage and be knocked Airborne for {durationAirborne}s.",
          descValues: {
            sustainedDamage: 40,
            scallingSustained: "10%",
            intervalDamage: 0.2,
            slowEnemies: "30%",
            enhancedDamage: 250,
            scallingEnhanced: "100%",
            durationAirborne: 0.8,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Magic Power" },
                create: { name: "Magic Power", color: "#60f8fe" },
              },
              {
                where: { name: "Magic Damage" },
                create: { name: "Magic Damage", color: "#c773ff" },
              },
              {
                where: { name: "Airborne" },
                create: { name: "Airborne", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
            {
              type: "Sustained Damage",
              levelValues: {
                lvl1: 40,
                lvl2: 45,
                lvl3: 50,
                lvl4: 55,
                lvl5: 60,
              },
            },
            {
              type: "Enhanced Damage",
              levelValues: {
                lvl1: 250,
                lvl2: 280,
                lvl3: 310,
                lvl4: 340,
                lvl5: 370,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 60,
                lvl2: 70,
                lvl3: 80,
                lvl4: 90,
                lvl5: 100,
              },
            },
            {
              type: "Spell Vamp Ratio",
              levelValues: {
                all: "50%",
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 9.0,
                lvl2: 8.8,
                lvl3: 8.6,
                lvl4: 8.4,
                lvl5: 8.1,
                lvl6: 7.9,
                lvl7: 7.7,
                lvl8: 7.5,
                lvl9: 7.3,
                lvl10: 7.1,
                lvl11: 6.9,
                lvl12: 6.6,
                lvl13: 6.4,
                lvl14: 6.4,
                lvl15: 6.0,
              },
            },
          ],
          abilityTags: {
            create: [
              { abilityTagId: 22, orderIndex: 0 },
              { abilityTagId: 13, orderIndex: 1 },
            ],
          },
        },
      ],
    },
    roles: {
      create: [
        { roleId: 2, orderIndex: 0 },
        { roleId: 4, orderIndex: 1 },
      ],
    },
    specialities: {
      create: [
        { specialityId: 13, orderIndex: 0 },
        { specialityId: 10, orderIndex: 1 },
      ],
    },
    positions: {
      create: [
        { positionId: 2, orderIndex: 0 },
        { positionId: 3, orderIndex: 1 },
      ],
    },
    durability: 6,
    offense: 6,
    controlEffect: 7,
    difficulty: 2,
    abilityResource: "Mana",
    abilityResourceColor: "#3182f4",
  },
};
