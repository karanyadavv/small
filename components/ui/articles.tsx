"use client";

import fetchArticles from "@/services/articles";
import { useQuery } from "@tanstack/react-query";


interface Article{
  id: string,
  title: string,
  content: string,
  publishStatus: string,
  publishedAt?: Date,
  updatedAt: Date,
  authorId: string
}

export default function Articles(){
  const { isError, isPending, data } = useQuery<Article[]>({
    queryKey: ['fetchArticles'],
    queryFn: fetchArticles
  })

  if(isError) return "Error occured"

  if(isPending) return "Fetching articles"

  return(
    <div>
      {data.map((article)=>{
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        )
      })}
    </div>
  )
}