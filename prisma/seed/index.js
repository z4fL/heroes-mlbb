const { PrismaClient } = require("@prisma/client");
const Lunox = require("./data/Lunox");
const Ling = require("./data/Ling");
const skins = require("./skins");
const Julian = require("./data/Julian");

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      {
        name: "Tank",
        icon: "/images/roles/tank_icon.png",
      },
      {
        name: "Fighter",
        icon: "/images/roles/fighter_icon.png",
      },
      {
        name: "Assassin",
        icon: "/images/roles/assassin_icon.png",
      },
      {
        name: "Mage",
        icon: "/images/roles/mage_icon.png",
      },
      {
        name: "Marksman",
        icon: "/images/roles/marksman_icon.png",
      },
      {
        name: "Support",
        icon: "/images/roles/support_icon.png",
      },
    ],
  });

  await prisma.position.createMany({
    data: [
      {
        name: "Roam",
        icon: "/images/positions/roam_icon.png",
      },
      {
        name: "Jungler",
        icon: "/images/positions/jungler_icon.png",
      },
      {
        name: "Mid Lane",
        icon: "/images/positions/midlane_icon.png",
      },
      {
        name: "EXP Lane",
        icon: "/images/positions/explane_icon.png",
      },
      {
        name: "Gold Lane",
        icon: "/images/positions/goldlane_icon.png",
      },
    ],
  });

  await prisma.speciality.createMany({
    data: [
      { name: "Regen" },
      { name: "Crowd Control" },
      { name: "Finisher" },
      { name: "Charge" },
      { name: "Push" },
      { name: "Damage" },
      { name: "Burst" },
      { name: "Poke" },
      { name: "Initiator" },
      { name: "Magic Damage" },
      { name: "Mixed Damage" },
      { name: "Guard" },
      { name: "Chase" },
      { name: "Control" },
      { name: "Support" },
    ],
  });

  await prisma.abilityTag.createMany({
    data: [
      {
        name: "Buff", // 1
        color: "#4f9cb8",
      },
      {
        name: "Speed Up", // 2
        color: "#4f9cb8",
      },
      {
        name: "Remove CC", // 3
        color: "#4f9cb8",
      },
      {
        name: "Reduce DMG", // 4
        color: "#4f9cb8",
      },
      {
        name: "Summon", // 5
        color: "#617fc7",
      },
      {
        name: "Morph", // 6
        color: "#617fc7",
      },
      {
        name: "Attach", // 7
        color: "#617fc7",
      },
      {
        name: "Conceal", // 8
        color: "#617fc7",
      },
      {
        name: "Camouflage", // 9
        color: "#617fc7",
      },
      {
        name: "Mobility", // 10
        color: "#a269c7",
      },
      {
        name: "Charge", // 11
        color: "#a269c7",
      },
      {
        name: "Teleport", // 12
        color: "#a269c7",
      },
      {
        name: "Damage", // 13
        color: "#c77955",
      },
      {
        name: "Burst", // 14
        color: "#c77955",
      },
      {
        name: "AOE", // 15
        color: "#c77955",
      },
      {
        name: "Heal", // 16
        color: "#59a86f",
      },
      {
        name: "Shield", // 17
        color: "#59a86f",
      },
      {
        name: "Invicible", // 18
        color: "#b19d60",
      },
      {
        name: "Death Immune", // 19
        color: "#b19d60",
      },
      {
        name: "CC Immune", // 20
        color: "#b19d60",
      },
      {
        name: "Control", // 21
        color: "#cd5d6d",
      },
      {
        name: "CC", // 22
        color: "#cd5d6d",
      },
      {
        name: "Slow", // 23
        color: "#cd5d6d",
      },
      {
        name: "Debuff", // 24
        color: "#cd5d6d",
      },
    ],
  });

  await prisma.skinTag.createMany({
    // name // diamond // collectible value
    data: [
      // Rarities
      {
        icon: "/images/skin-tag/Elite_SkinTag.png",
        name: "Elite", // 599 // 100
      },
      {
        icon: "/images/skin-tag/Special_SkinTag.png",
        name: "Special", // 749 // 200
      },
      {
        icon: "/images/skin-tag/Epic_SkinTag.png",
        name: "Epic", // 899 1089 // 400
      },

      // Limited
      {
        icon: "/images/skin-tag/Limited_SkinTag.png",
        name: "Limited", // 749 // 200
      },

      // Seasonal Skins
      {
        icon: "/images/skin-tag/S2_SkinTag.png",
        name: "S2", // - // 100
      },

      // Community Create
      {
        icon: "/images/skin-tag/Create_SkinTag.png",
        name: "Create", // 749 899 // 200 400
      },

      // Event Special
      {
        icon: "/images/skin-tag/Lunar_Festival_SkinTag.png",
        name: "Lunar Festival", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Valentine_SkinTag.png",
        name: "Valentine", // 749 899 // 200 400
      },
      {
        icon: "/images/skin-tag/Summer_SkinTag.png",
        name: "Summer", // 599 749 // 200
      },
      {
        icon: "/images/skin-tag/Halloween_SkinTag.png",
        name: "Halloween", // 749 // 200
      },
      {
        icon: "/images/skin-tag/Christmas_SkinTag.png",
        name: "Christmas", // 749 // 200
      },

      // 515 Events
      {
        icon: "/images/skin-tag/S.T.U.N._SkinTag.png",
        name: "S.T.U.N.", // 899 // 400
      },
      {
        icon: "/images/skin-tag/M-World_SkinTag.png",
        name: "M-World", // 899 // 400
      },
      {
        icon: "/images/skin-tag/515_SkinTag.png",
        name: "515", // - // 400
      },
      {
        icon: "/images/skin-tag/AS_SkinTag.png",
        name: "AS", // - // 400
      },
      {
        icon: "/images/skin-tag/Atomic_SkinTag.png",
        name: "Atomic", // 899 // 400
      },
      {
        icon: "/images/skin-tag/ALLSTAR_SkinTag.png",
        name: "ALLSTAR", // ? // 3000
      },
      {
        icon: "/images/skin-tag/AS_2024_SkinTag.png",
        name: "AS 2024", // - // 400
      },
      {
        icon: "/images/skin-tag/Sparkle_SkinTag.png",
        name: "Sparkle", // 899 // 400
      },
      {
        icon: "/images/skin-tag/ALLSTAR_2024_SkinTag.png",
        name: "ALLSTAR 2024", // ? // 3000
      },

      // Starlight
      {
        icon: "/images/skin-tag/Starlight_SkinTag.png",
        name: "Starlight", // 300 // 200
      },
      {
        icon: "/images/skin-tag/Annual_Starlight_SkinTag.png",
        name: "Annual Starlight", // - // 2000
      },

      // Mythic Skins
      {
        icon: "/images/skin-tag/Mythic_2023_SkinTag.png",
        name: "Mythic 2023", // - // 400
      },

      // Tournaments
      {
        icon: "/images/skin-tag/MPL_SkinTag.png",
        name: "MPL", // 749 // 200
      },
      {
        icon: "/images/skin-tag/Rising_SkinTag.png",
        name: "Rising", // -  // 200 400
      },

      // World Championship
      {
        icon: "/images/skin-tag/MSC_2018_SkinTag.png",
        name: "MSC 2018", // ? // 400
      },
      {
        icon: "/images/skin-tag/M1_SkinTag.png",
        name: "M1", // ? // 400
      },
      {
        icon: "/images/skin-tag/PRIME_SkinTag.png",
        name: "PRIME", // - // 3000
      },
      {
        icon: "/images/skin-tag/Champion_SkinTag.png",
        name: "Champion", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Finals_MVP_SkinTag.png",
        name: "Finals MVP", // 899 // 400
      },

      // Lucky box
      {
        icon: "/images/skin-tag/Luckybox_SkinTag.png",
        name: "Luckybox", // ? // 2000
      },

      // Collector Event
      {
        icon: "/images/skin-tag/Collector_SkinTag.png",
        name: "Collector", // ? // 2000
      },

      // 11.11 Event
      {
        icon: "/images/skin-tag/11.11_SkinTag.png",
        name: "11.11", // ? // 3000
      },

      // Series
      {
        icon: "/images/skin-tag/S.A.B.E.R._SkinTag.png",
        name: "S.A.B.E.R.", // 899 // 400
      },
      {
        icon: "/images/skin-tag/V.E.N.O.M._SkinTag.png",
        name: "V.E.N.O.M.", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Zodiac_SkinTag.png",
        name: "Zodiac", // ? // 400
      },
      {
        icon: "/images/skin-tag/Lightborn_SkinTag.png",
        name: "Lightborn", // 1089 // 400
      },
      {
        icon: "/images/skin-tag/Dragon_Tamer_SkinTag.png",
        name: "Dragon Tamer", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Blazing_Bounties_SkinTag.png",
        name: "Blazing Bounties", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Dawning_Stars_SkinTag.png",
        name: "Dawning Stars", // ? // 3000
      },
      {
        icon: "/images/skin-tag/ABYSS_SkinTag.png",
        name: "ABYSS", // ? // 3000
      },
      {
        icon: "/images/skin-tag/The_Aspirants_SkinTag.png",
        name: "The Aspirants", // ? // 3000
      },
      {
        icon: "/images/skin-tag/The_Exorcists_SkinTag.png",
        name: "The Exorcists", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Neobeasts_SkinTag.png",
        name: "Neobeasts", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Clouds_SkinTag.png",
        name: "Clouds", // ? // 2000
      },
      {
        icon: "/images/skin-tag/Zenith_SkinTag.png",
        name: "Zenith", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Mistbenders_SkinTag.png",
        name: "Mistbenders", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Soul_Vessels_SkinTag.png",
        name: "Soul Vessels", // ? // 3000
      },

      // Collaboration
      {
        icon: "/images/skin-tag/KOF_SkinTag.png",
        name: "KOF", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Pacquiao_Licensed_SkinTag.png",
        name: "Pacquiao Licensed", // ? // 400
      },
      {
        icon: "/images/skin-tag/Star_Wars_SkinTag.png",
        name: "Star Wars", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Transformers_SkinTag.png",
        name: "Transformers", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Sanrio_SkinTag.png",
        name: "Sanrio", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Kung_Fu_Panda_SkinTag.png",
        name: "Kung Fu Panda", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Neymar_Jr_SkinTag.png",
        name: "Neymar Jr", // 899 // 400
      },
      {
        icon: "/images/skin-tag/Saint_Seiya_SkinTag.png",
        name: "Saint Seiya", // ? // 400 3000
      },
      {
        icon: "/images/skin-tag/Jujutsu_Kaisen_SkinTag.png",
        name: "Jujutsu Kaisen", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Ducati_SkinTag.png",
        name: "Ducati", // ? // 3000
      },
      {
        icon: "/images/skin-tag/Attack_on_Titan_SkinTag.png",
        name: "Attack on Titan", // ? // 3000
      },
      {
        icon: "/images/skin-tag/HUNTER×HUNTER_SkinTag.png",
        name: "HUNTER×HUNTER", // ? // 3000
      },

      // Legend
      {
        icon: "/images/skin-tag/Legend_SkinTag.png",
        name: "Legend", // ? // 4000
      },
    ],
  });

  await prisma.hero.create(Lunox);
  await prisma.hero.create(Ling);
  await prisma.hero.create(Julian);

  await prisma.skin.createMany({
    data: skins,
  });
}

main()
  .catch(async (e) => {
    console.error(`There was an error while seeding: ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    console.log("Successfully seeded database. Closing connection.");
    await prisma.$disconnect();
  });
