const { PrismaClient } = require("@prisma/client");

const role = require("./role");
const position = require("./position");
const speciality = require("./speciality");
const abilityTag = require("./abilityTag");
const skinTag = require("./skinTag");

const Lunox = require("./data/Lunox");
const Ling = require("./data/Ling");
const Julian = require("./data/Julian");
const skins = require("./skins");

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany(role);
  await prisma.position.createMany(position);
  await prisma.speciality.createMany(speciality);
  await prisma.abilityTag.createMany(abilityTag);
  await prisma.skinTag.createMany(skinTag);

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
