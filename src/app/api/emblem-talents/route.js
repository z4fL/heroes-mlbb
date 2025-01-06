import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const data = await prisma.emblem.findMany({
      select: {
        name: true,
        icon: true,
        attributes: true,
        talents: true,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
