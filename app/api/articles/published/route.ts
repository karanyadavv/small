import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "../../users/route";



export async function GET(request: Request) {
    const { userId, error } = await getAuthenticatedUser();
      if (error) return error; // If unauthorized, return early
  try{
    const publishedArticles = await prisma.user.findMany({
      where: {
        id:{ equals: userId }
      },
      include:{
        articles:{
          where: { publishStatus:"published" }
        }
      }
    });
    return NextResponse.json(publishedArticles, {status: 200})
  }catch(error){
    return NextResponse.json({error:"Failed to fetch articles"}, {status: 500});
  }
}