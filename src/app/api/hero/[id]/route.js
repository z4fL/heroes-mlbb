import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = (await params).id;
  const heroId = parseInt(id);

  const hero = await prisma.hero.findUnique({
    where: {
      id: heroId,
    },
    include: {
      roles: {
        select: {
          role: {
            select: { name: true, icon: true },
          },
        },
      },
      positions: {
        select: {
          position: {
            select: { name: true, icon: true },
          },
        },
      },
      specialities: {
        select: {
          speciality: {
            select: { name: true },
          },
        },
      },
      abilities: {
        include: {
          skillTerms: true,
          abilityTags: {
            select: {
              abilityTag: {
                select: {
                  name: true,
                  color: true,
                },
              },
            },
          },
        },
      },
      skins: {
        include: {
          skinTag: {
            select: { name: true, icon: true },
          },
        },
      },
    },
  });

  if (!hero) {
    return NextResponse.json({ error: "Hero not found" }, { status: 404 });
  }

  // Ambil hero sebelum dan sesudah
  const heroBefore = await prisma.hero.findFirst({
    where: { id: { lt: heroId } },
    select: {
      id: true,
      name: true,
      portrait: true,
    },
    orderBy: { id: "desc" },
  });

  const heroAfter = await prisma.hero.findFirst({
    where: { id: { gt: heroId } },
    select: {
      id: true,
      name: true,
      portrait: true,
    },
    orderBy: { id: "asc" },
  });

  const data = {
    ...hero,
    roles: hero.roles.map((r) => ({
      name: r.role.name,
      icon: r.role.icon,
    })),
    positions: hero.positions.map((p) => ({
      name: p.position.name,
      icon: p.position.icon,
    })),
    specialities: hero.specialities.map((s) => s.speciality.name),
    abilities: hero.abilities.map((a) => ({
      ...a,
      abilityTags: a.abilityTags.map((t) => ({
        name: t.abilityTag.name,
        color: t.abilityTag.color,
      })),
    })),
  };

  return NextResponse.json(
    {
      data,
      surroundingHeroes: {
        before: heroBefore,
        after: heroAfter,
      },
    },
    { status: 200 }
  );
}
