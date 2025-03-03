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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query";
import { Button } from "./button";
import { Article } from "@/types/types";
import { fetchArticles } from "@/services/articles";



export default function Articles(){
  const { isError, isPending, data } = useQuery<Article[]>({
    queryKey: ['fetchArticles'],
    queryFn: fetchArticles,
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if(isError){
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to fetch articles
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
      {data.map((article)=>{
        return (
          <div key={article.id} className="w-full sm:max-w-2xl">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-extrabold text-xl hover:underline cursor-pointer transition-all duration-500">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs font-light">{article.content.slice(0,300)}</p>
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