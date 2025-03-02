import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "../all/route";



export async function GET(request: Request) {
    const { userId, error } = await getAuthenticatedUser();
    if (error) return error; // If unauthorized, return early
  try{
    const publishedArticles = await prisma.articles.findMany({
      where: {
        authorId: userId,
        publishStatus: "published"
      }
    });
    return NextResponse.json(publishedArticles, {status: 200})
  }catch(error){
    return NextResponse.json({error:"Failed to fetch articles"}, {status: 500});
  }
}