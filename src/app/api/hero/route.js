import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
            name: true
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    return NextResponse.json(heroes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
