import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = (await params).id;

  const hero = await prisma.hero.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      roles: true,
      positions: true,
      specialities: true,
      abilities: {
        include: {
          skillTerms: true,
          abilityTags: true,
        },
      },
      skins: {
        include: {
          skinTag: true,
        },
      },
    },
  });

  if (!hero) {
    return NextResponse.json("Hero not found!", { status: 404 });
  } else {
    return NextResponse.json(hero, { status: 200 });
  }
}
