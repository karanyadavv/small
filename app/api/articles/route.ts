import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
  try{
    const articles = await prisma.articles.findMany();
    return NextResponse.json(articles, {status: 200})
  }catch(error){
    return NextResponse.json({error:"Failed to fetch articles"}, {status: 500});
  }
}

// export async function POST(request:Request) {
//   // Use `auth()` to get the user's ID
//   const { userId } = await auth()

//   // Protect the route by checking if the user is signed in
//   if (!userId) {
//     return new NextResponse('Unauthorized', { status: 401 })
//   }
//   const {title, content} = request.body;
//   const article = await prisma.articles.create({
//     data:{
//       title: title,
//       content: content,
//       authorId: userId
//     }
//   });
//   return NextResponse.json({message: "Article created"})
// }