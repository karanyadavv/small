import { z } from "zod";


const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  slug: z.string(),
  publishStatus: z.enum(["draft","published"]),
  publishedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.string()
})

export async function fetchArticles(){
  const response  = await fetch('/api/articles');
  if(!response.ok){
    throw new Error ("Failed to fetch articles");
  }
  const data  = await response.json();
  return articleSchema.parse(data);
  
}

export async function userArticles(){
  const response  = await fetch('/api/articles/all');
  if(!response.ok){
    throw new Error ("Failed to fetch your articles");
  }
  const data  = await response.json();
  return data;
  
}