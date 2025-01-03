import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url); // Ambil query string dari request URL
  const isOnGallery = searchParams.get("isgallery");

  try {
    let query = {};
    if (isOnGallery) {
      query = {
        where: {
          isGallery: true,
        },
        orderBy: {
          id: "desc",
        },
      };
    }

    const data = await prisma.skinTag.findMany(query);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
