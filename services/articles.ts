import { articleSchema } from "@/types/types";
import { z } from "zod";


export async function fetchArticles(){
  try{
  const response  = await fetch('/api/articles');
  if(!response.ok){
    throw new Error ("Failed to fetch articles");
  }
  const data  = await response.json();

  // Validate response with Zod
  const parsedData = await z.array(articleSchema).parse(data);
  console.log("Parsed data:", parsedData);
  return parsedData;
  }catch(error){
    console.error("fetchArticles error:", error);
    throw error;
  }
}

export async function userArticles(){
  try{

    const response  = await fetch('/api/articles/all');
    if(!response.ok){
      throw new Error ("Failed to fetch your articles");
    }
    const data  = await response.json();
    const parsedData = await z.array(articleSchema).parse(data);
    console.log("Parsed data:", parsedData);
    return parsedData;
    return data;
  }catch(error){
    console.error("fetch user specific articles error:", error);
    throw error;
  }
  
}