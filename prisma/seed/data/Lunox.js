module.exports = {
  data: {
    id: 68,
    name: "Lunox",
    alias: "Twilight Goddess",
    icon: "/images/heroes/68/Hero681-icon.png",
    portrait: "/images/heroes/68/Hero681-portrait.png",
    splashArt: "/images/heroes/68/Hero681-splashart.jpg",
    abilities: {
      create: [
        {
          type: "Passive",
          name: "Dreamland Twist",
          icon: "/images/heroes/68/abilities/Hero68-passive.png",
          description:
            "Lunox is twisted by the powers of Chaos and Order.\nWhen Lunox uses Power of Order, she gains {orderSV} Spell Vamp for every {orderMPen} Magic Penetration.\nWhen Lunox uses Power of Chaos, she gains {chaosMPen} Magic Penetration for every {chaosSV} of Spell Vamp.",
          descValues: {
            orderSV: "0.5%",
            orderMPen: "1%",
            chaosMPen: "0.5%",
            chaosSV: "1%",
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Power of Order" },
                create: { name: "Power of Order", color: "#EAC56B" },
              },
              {
                where: { name: "Power of Chaos" },
                create: { name: "Power of Chaos", color: "#EAC56B" },
              },
              {
                where: { name: "Spell Vamp" },
                create: { name: "Spell Vamp", color: "#EAC56B" },
              },
              {
                where: { name: "Magic Penetration" },
                create: { name: "Magic Penetration", color: "#c773ff" },
              },
            ],
          },
          abilityTags: {
            connect: { id: 1 },
          },
        },
        {
          type: "Skill 1",
          name: "Starlight Pulse",
          icon: "/images/heroes/68/abilities/Hero68-skill1.png",
          description:
            "Lunox summons a rain of starlight upon nearby enemies, dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage. The starlight then returns to Lunox, each restoring and recovering {baseHeal} (+{scallingHeal} Total Magic Power) HP to her. The HP restored is doubled when hitting enemy heroes.\nGrants one stack of Power of Order after use.",
          descValues: {
            baseDamage: 200,
            scallingAttack: "110%",
            baseHeal: 75,
            scallingHeal: "30%",
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
                where: { name: "Power of Order" },
                create: { name: "Power of Order", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 200,
                lvl2: 230,
                lvl3: 260,
                lvl4: 290,
                lvl5: 320,
                lvl6: 350,
              },
            },
            {
              type: "HP Regen",
              levelValues: {
                lvl1: 75,
                lvl2: 80,
                lvl3: 85,
                lvl4: 90,
                lvl5: 95,
                lvl6: 100,
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                all: 2.0,
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
                lvl6: 55,
              },
            },
            {
              type: "Spell Vamp Ratio",
              levelValues: {
                all: "50%",
              },
            },
          ],
          abilityTags: {
            connect: [{ id: 15 }, { id: 16 }],
          },
        },
        {
          type: "Skill 2",
          name: "Chaos Assault",
          icon: "/images/heroes/68/abilities/Hero68-skill2.png",
          description:
            "Lunox unleashes Chaos Energy at an enemy, dealing Magic Damage equal to {baseDamage} (+{scallingAttack} Total Magic Power) plus {targetMaxHP} of the target's Max HP ({creepMaxHP} of Max HP against Creeps).\nGrants one stack of Power of Chaos after use.",
          descValues: {
            baseDamage: 250,
            scallingAttack: "120%",
            targetMaxHP: "2.5%",
            creepMaxHP: "1.5",
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
                where: { name: "Power of Chaos" },
                create: { name: "Power of Chaos", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
            {
              type: "Base Damage",
              levelValues: {
                lvl1: 250,
                lvl2: 270,
                lvl3: 290,
                lvl4: 310,
                lvl5: 330,
                lvl6: 350,
              },
            },
            {
              type: "Extra Percentage Damage",
              levelValues: {
                lvl1: "2.5%",
                lvl2: "3.0%",
                lvl3: "3.5%",
                lvl4: "4.0%",
                lvl5: "4.5%",
                lvl6: "5.0%",
              },
            },
            {
              type: "Damage to Creeps",
              levelValues: {
                lvl1: "1.5%",
                lvl2: "1.8%",
                lvl3: "2.1%",
                lvl4: "2.4%",
                lvl5: "2.7%",
                lvl6: "3.0%",
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                all: 2.0,
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
                lvl6: 55,
              },
            },
          ],
          abilityTags: {
            connect: [{ id: 13 }],
          },
        },
        {
          type: "Skill 3",
          name: "Cosmic Fission",
          icon: "/images/heroes/68/abilities/Hero68-skill3.png",
          description:
            "When Lunox uses the power of Order and Chaos, she will deal {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage to the targets along the way and slow them by {slowEnemies} for {slowDuration}s.",
          descValues: {
            baseDamage: 300,
            scallingAttack: "100%",
            slowEnemies: "40%",
            slowDuration: 2,
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
                lvl1: 300,
                lvl2: 340,
                lvl3: 380,
                lvl4: 420,
                lvl5: 460,
                lvl6: 500,
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 10.0,
                lvl2: 9.5,
                lvl3: 9.0,
                lvl4: 8.5,
                lvl5: 8.0,
                lvl6: 7.5,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 70,
                lvl2: 80,
                lvl3: 90,
                lvl4: 100,
                lvl5: 110,
                lvl6: 120,
              },
            },
          ],
          abilityTags: {
            connect: [{ id: 15 }, { id: 23 }],
          },
        },
        {
          type: "Ultimate",
          name: "Order & Chaos",
          icon: "/images/heroes/68/abilities/Hero68-skill4.png",
          description:
            "Lunox is twisted by the powers of Chaos and Order.\nWhen Lunox uses Power of Order, she gains Brilliance and becomes Incivible while dealing continuous damage to nearby enemies.\nhen Lunox uses Power of Chaos, she gains Darkening and can Blink in a target direction and greatly reduces the cooldown of Chaos Assault Chaos Assault for a brief period.",
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Incivible" },
                create: { name: "Incivible", color: "#EAC56B" },
              },
              {
                where: { name: "Blink" },
                create: { name: "Blink", color: "#EAC56B" },
              },
              {
                where: { name: "Power of Order" },
                create: { name: "Power of Order", color: "#EAC56B" },
              },
              {
                where: { name: "Brilliance" },
                create: { name: "Brilliance", color: "#EAC56B" },
              },
              {
                where: { name: "Power of Chaos" },
                create: { name: "Power of Chaos", color: "#EAC56B" },
              },
              {
                where: { name: "Darkening" },
                create: { name: "Darkening", color: "#EAC56B" },
              },
            ],
          },
          abilityTags: {
            connect: [{ id: 18 }, { id: 10 }],
          },
        },
        {
          type: "Ultimate",
          name: "Power of Order: Brilliance",
          icon: "/images/heroes/68/abilities/Hero68-skill4_brilliance.png",
          description:
            "Lunox extends the Light Barrier and becomes Incivible for {invicibleDuration}s, and gains {gainMovementSpeed} extra Movement Speed while dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage every {intervalDamage}s to nearby enemies.",
          descValues: {
            invicibleDuration: 2.5,
            gainMovementSpeed: "30%",
            baseDamage: 100,
            scallingAttack: "50%",
            intervalDamage: 0.5,
          },
          skillTerms: {
            connectOrCreate: [
              {
                where: { name: "Incivible" },
                create: { name: "Incivible", color: "#EAC56B" },
              },
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
                lvl1: 250,
                lvl2: 350,
                lvl3: 450,
              },
            },
            {
              type: "Cooldown",
              levelValues: {
                lvl1: 30.0,
                lvl2: 26.0,
                lvl3: 22.0,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 120,
                lvl2: 160,
                lvl3: 200,
              },
            },
          ],
          abilityTags: {
            connect: [{ id: 18 }, { id: 15 }],
          },
        },
        {
          type: "Ultimate",
          name: "Power of Chaos: Darkening",
          icon: "/images/heroes/68/abilities/Hero68-skill4_darkening.png",
          description:
            "Lunox blinks in designated direction, dealing {baseDamage} (+{scallingAttack} Total Magic Power) Magic Damage to nearby enemies, slowing them by {slowEnemies} for {slowDuration}s.\nFor the next {durationSkill}s, Lunox enhances her Power of Chaos to greatly reduce the cooldown of Chaos Assault (unaffected by CD Reduction).",
          descValues: {
            baseDamage: 250,
            scallingAttack: "100%",
            slowEnemies: "30%",
            slowDuration: 4,
            durationSkill: 4,
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
                where: { name: "Power of Chaos" },
                create: { name: "Power of Chaos", color: "#EAC56B" },
              },
              {
                where: { name: "Chaos Assault" },
                create: { name: "Chaos Assault", color: "#EAC56B" },
              },
            ],
          },
          scalings: [
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
                lvl1: 30.0,
                lvl2: 26.0,
                lvl3: 22.0,
              },
            },
            {
              type: "Mana Cost",
              levelValues: {
                lvl1: 120,
                lvl2: 160,
                lvl3: 200,
              },
            },
          ],
          abilityTags: {
            connect: [{ id: 23 }, { id: 15 }],
          },
        },
      ],
    },
    roles: {
      connect: { id: 4 },
    },
    specialities: {
      connect: [{ id: 7 }, { id: 6 }],
    },
    positions: {
      connect: [{ id: 5 }, { id: 3 }],
    },
    durability: 3,
    offense: 9,
    controlEffect: 2,
    difficulty: 9,
    abilityResource: "Mana",
    abilityResourceColor: "#3182f4",
  },
};
