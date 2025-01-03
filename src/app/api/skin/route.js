import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url); // Ambil query string dari request URL
  const tag = searchParams.get("tag");

  try {
    let query = {};
    if (tag) {
      query = {
        select: {
          name: true,
          splashArt: true,
          crop: true,
        },
        where: {
          skinTag: {
            name: {
              contains: tag,
              mode: "insensitive",
            },
          },
        },
      };
    }

    const data = await prisma.skin.findMany(query);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
