import prisma from "@/lib/prisma";
import { articleSchema } from "@/types/types";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
  try{
    const articles = await prisma.articles.findMany({
      where: { publishStatus: "published" },
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(articles, {status: 200})
  }catch(error){
    return NextResponse.json({error:"Failed to fetch articles"}, {status: 500});
  }
}
