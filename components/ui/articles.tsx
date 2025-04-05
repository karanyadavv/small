"use client";

import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import { Skeleton } from "@/components/ui/skeleton"
import { useAllArticles } from "@/hooks/useArticle";
import ArticleItem from "./article-item";

export default function Articles(){

  const { data: allArticles, isError, isPending } = useAllArticles();


  if(isError){
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to fetch articles{isError}
        </AlertDescription>
      </Alert>
    )
  }

  if(isPending){
    return (
      <div className="flex flex-col space-y-3 mt-4">
        <Skeleton className="h-[180px] w-xs md:w-2xl rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-xs md:w-2xl" />
          <Skeleton className="h-4 w-xs md:2-2xl" />
        </div>
      </div>
    )
  }


  return(
    <div className="flex flex-col items-center space-y-8 p-4 w-full">
      {allArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}