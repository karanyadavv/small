"use client";

import { AlertCircle, ChevronRight } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "./button";
import { useAllArticles } from "@/hooks/useArticle";

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
      {allArticles.map((article)=>{
        return (
          <div key={article.id} className="w-full sm:max-w-2xl text-pretty text-xl font-bold tracking-[-0.015em] text-gray-950">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-extrabold text-xl hover:underline cursor-pointer transition-all duration-500">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-auto mt-3 line-clamp-2 text-sm/5 text-gray-600">{article.content.slice(0,300)}</p>
              </CardContent>
              <CardFooter>
                <Button variant={"outline"}>
                Read more<ChevronRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )
      })}
    </div>
  )
}