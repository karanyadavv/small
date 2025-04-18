import prisma from "@/lib/prisma";
import { createArticleSchema } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function getAuthenticatedUser() {
  const { userId } = await auth()

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return { error: new NextResponse("Unauthorized", { status: 401 }) };
  }
  return { userId };
}

export async function GET(request: Request) {
  const { userId, error } = await getAuthenticatedUser();
  if (error) return error; // If unauthorized, return early
  try{
    const allArticles = await prisma.articles.findMany({
      where: { authorId: userId },
    });
    return NextResponse.json(allArticles, {status: 200})
  }catch(error){
    return NextResponse.json({error:"Failed to fetch your articles"}, {status: 500});
  }
}

export async function POST(request:Request) {
  const { userId, error } = await getAuthenticatedUser();
  if (error) return error; // If unauthorized, return early
  try{
    const body = await request.json();
    const validatedSchema =  createArticleSchema.safeParse(body);
    if(!validatedSchema.success){
      return NextResponse.json({error: validatedSchema.error.errors}, { status: 400 });
    }
    const article = await prisma.articles.create({
      data: {
        ...validatedSchema.data,
        authorId: userId
      },
    });
    return NextResponse.json(article, { status: 200 })
  }catch(error: any){
    console.error(error);
    return NextResponse.json({error: error.message }, {status: 500});
  }
}