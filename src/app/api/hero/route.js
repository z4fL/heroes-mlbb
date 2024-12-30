import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const heroes = await prisma.hero.findMany({
      select: {
        id: true,
        name: true,
        portrait: true,
        difficulty: true,
        roles: {
          select: {
            role: {
              select: { name: true },
            },
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });

    const formattedHeroes = heroes.map((hero) => ({
      ...hero,
      roles: hero.roles.map((r) => r.role.name),
    }));

    return NextResponse.json(formattedHeroes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
