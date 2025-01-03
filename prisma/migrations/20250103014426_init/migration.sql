-- CreateTable
CREATE TABLE "Role" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(15) NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "alias" VARCHAR(25) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "portrait" VARCHAR(255) NOT NULL,
    "splashArt" VARCHAR(255) NOT NULL,
    "durability" SMALLINT NOT NULL,
    "offense" SMALLINT NOT NULL,
    "controlEffect" SMALLINT NOT NULL,
    "difficulty" SMALLINT NOT NULL,
    "abilityResource" VARCHAR(10),
    "abilityResourceColor" VARCHAR(10),
    "abilityResourceName" VARCHAR(25),

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbilityTag" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "color" CHAR(7) NOT NULL,

    CONSTRAINT "AbilityTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "heroId" SMALLINT NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "descValues" JSONB,
    "scalings" JSONB,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillTerm" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "color" CHAR(7) NOT NULL,

    CONSTRAINT "SkillTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skin" (
    "id" SERIAL NOT NULL,
    "heroId" SMALLINT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "portrait" VARCHAR(255) NOT NULL,
    "splashArt" VARCHAR(255) NOT NULL,
    "skinTagId" INTEGER,

    CONSTRAINT "Skin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkinTag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "collectionValues" INTEGER[],
    "icon" VARCHAR(255) NOT NULL,
    "isGallery" BOOLEAN NOT NULL,
    "group" TEXT,

    CONSTRAINT "SkinTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroesOnRoles" (
    "heroId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "orderIndex" INTEGER,

    CONSTRAINT "HeroesOnRoles_pkey" PRIMARY KEY ("heroId","roleId")
);

-- CreateTable
CREATE TABLE "HeroesOnSpecialities" (
    "heroId" INTEGER NOT NULL,
    "specialityId" INTEGER NOT NULL,
    "orderIndex" INTEGER,

    CONSTRAINT "HeroesOnSpecialities_pkey" PRIMARY KEY ("heroId","specialityId")
);

-- CreateTable
CREATE TABLE "HeroesOnPositions" (
    "heroId" INTEGER NOT NULL,
    "positionId" INTEGER NOT NULL,
    "orderIndex" INTEGER,

    CONSTRAINT "HeroesOnPositions_pkey" PRIMARY KEY ("heroId","positionId")
);

-- CreateTable
CREATE TABLE "AbilityTagsOnAbilities" (
    "abilityId" INTEGER NOT NULL,
    "abilityTagId" INTEGER NOT NULL,
    "orderIndex" INTEGER,

    CONSTRAINT "AbilityTagsOnAbilities_pkey" PRIMARY KEY ("abilityId","abilityTagId")
);

-- CreateTable
CREATE TABLE "_AbilityToSkillTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AbilityToSkillTerm_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillTerm_name_key" ON "SkillTerm"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SkinTag_name_key" ON "SkinTag"("name");

-- CreateIndex
CREATE INDEX "_AbilityToSkillTerm_B_index" ON "_AbilityToSkillTerm"("B");

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skin" ADD CONSTRAINT "Skin_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skin" ADD CONSTRAINT "Skin_skinTagId_fkey" FOREIGN KEY ("skinTagId") REFERENCES "SkinTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnRoles" ADD CONSTRAINT "HeroesOnRoles_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnRoles" ADD CONSTRAINT "HeroesOnRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnSpecialities" ADD CONSTRAINT "HeroesOnSpecialities_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnSpecialities" ADD CONSTRAINT "HeroesOnSpecialities_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnPositions" ADD CONSTRAINT "HeroesOnPositions_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeroesOnPositions" ADD CONSTRAINT "HeroesOnPositions_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilityTagsOnAbilities" ADD CONSTRAINT "AbilityTagsOnAbilities_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilityTagsOnAbilities" ADD CONSTRAINT "AbilityTagsOnAbilities_abilityTagId_fkey" FOREIGN KEY ("abilityTagId") REFERENCES "AbilityTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToSkillTerm" ADD CONSTRAINT "_AbilityToSkillTerm_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToSkillTerm" ADD CONSTRAINT "_AbilityToSkillTerm_B_fkey" FOREIGN KEY ("B") REFERENCES "SkillTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
