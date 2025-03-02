import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    // Use `auth()` to get the user's ID
    const { userId } = await auth()

    // Protect the route by checking if the user is signed in
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
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