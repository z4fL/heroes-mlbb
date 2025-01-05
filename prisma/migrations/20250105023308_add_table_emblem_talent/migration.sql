-- CreateTable
CREATE TABLE "Emblem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "attributes" JSONB NOT NULL,

    CONSTRAINT "Emblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talent" (
    "id" SERIAL NOT NULL,
    "emblemId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "info" VARCHAR(40),
    "description" VARCHAR(100) NOT NULL,
    "infoDesc" VARCHAR(100),
    "cooldown" INTEGER,
    "duration" INTEGER,
    "infoCooldown" VARCHAR(50),

    CONSTRAINT "Talent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emblem_name_key" ON "Emblem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Talent_name_key" ON "Talent"("name");

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_emblemId_fkey" FOREIGN KEY ("emblemId") REFERENCES "Emblem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
