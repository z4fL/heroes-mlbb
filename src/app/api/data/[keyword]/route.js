import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params: { keyword } }) {
  const model = prisma[keyword]; // get dynamic table name
  if (model) {
    const data = await model.findMany();
    return NextResponse.json(data, {
      status: 200,
    });
  } else {
    return NextResponse.json("table not found!", {
      status: 500,
    });
  }
}
