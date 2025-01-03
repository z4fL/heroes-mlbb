import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await prisma.role.findMany();
  return NextResponse.json(data, {
    status: 200,
  });
}
