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
CREATE TABLE "AbilityTag" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "color" CHAR(7) NOT NULL,

    CONSTRAINT "AbilityTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(10) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speciality" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(15) NOT NULL,

    CONSTRAINT "Speciality_pkey" PRIMARY KEY ("id")
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
    "icon" VARCHAR(255) NOT NULL,

    CONSTRAINT "SkinTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HeroToRole" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL,

    CONSTRAINT "_HeroToRole_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_HeroToSpeciality" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL,

    CONSTRAINT "_HeroToSpeciality_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_HeroToPosition" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL,

    CONSTRAINT "_HeroToPosition_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AbilityToSkillTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AbilityToSkillTerm_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AbilityToAbilityTag" (
    "A" INTEGER NOT NULL,
    "B" SMALLINT NOT NULL,

    CONSTRAINT "_AbilityToAbilityTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillTerm_name_key" ON "SkillTerm"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SkinTag_name_key" ON "SkinTag"("name");

-- CreateIndex
CREATE INDEX "_HeroToRole_B_index" ON "_HeroToRole"("B");

-- CreateIndex
CREATE INDEX "_HeroToSpeciality_B_index" ON "_HeroToSpeciality"("B");

-- CreateIndex
CREATE INDEX "_HeroToPosition_B_index" ON "_HeroToPosition"("B");

-- CreateIndex
CREATE INDEX "_AbilityToSkillTerm_B_index" ON "_AbilityToSkillTerm"("B");

-- CreateIndex
CREATE INDEX "_AbilityToAbilityTag_B_index" ON "_AbilityToAbilityTag"("B");

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skin" ADD CONSTRAINT "Skin_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skin" ADD CONSTRAINT "Skin_skinTagId_fkey" FOREIGN KEY ("skinTagId") REFERENCES "SkinTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToRole" ADD CONSTRAINT "_HeroToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToRole" ADD CONSTRAINT "_HeroToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToSpeciality" ADD CONSTRAINT "_HeroToSpeciality_A_fkey" FOREIGN KEY ("A") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToSpeciality" ADD CONSTRAINT "_HeroToSpeciality_B_fkey" FOREIGN KEY ("B") REFERENCES "Speciality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToPosition" ADD CONSTRAINT "_HeroToPosition_A_fkey" FOREIGN KEY ("A") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToPosition" ADD CONSTRAINT "_HeroToPosition_B_fkey" FOREIGN KEY ("B") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToSkillTerm" ADD CONSTRAINT "_AbilityToSkillTerm_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToSkillTerm" ADD CONSTRAINT "_AbilityToSkillTerm_B_fkey" FOREIGN KEY ("B") REFERENCES "SkillTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToAbilityTag" ADD CONSTRAINT "_AbilityToAbilityTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToAbilityTag" ADD CONSTRAINT "_AbilityToAbilityTag_B_fkey" FOREIGN KEY ("B") REFERENCES "AbilityTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
