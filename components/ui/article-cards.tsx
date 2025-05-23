"use client";

import { CircleCheck, NotebookPen, Radio } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { useUserAllArticles, useDraftArticles, usePublishedArticles } from "@/hooks/useArticle";



export default function ArticleCard(){

  const { data: allArticles } = useUserAllArticles();
  const { data: publishedArticles } = usePublishedArticles();
  const { data: draftArticles } = useDraftArticles();


  return(
    <div className="p-4 md:p-0 mb-6">
      <div className="mb-6 pl-2">
        <p className="font-bold text-md md:text-2xl">Good evening, Karan Yadav</p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/3 relative">
          <span className="absolute top-4 right-4 text-muted-foreground">
            <CircleCheck />
          </span>
          <CardHeader>
            <CardTitle>All articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{allArticles?.length ?? 0}</p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-1/3 relative">
          <span className="absolute top-4 right-4 text-muted-foreground">
            <NotebookPen />
          </span>
          <CardHeader>
            <CardTitle>Draft Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{draftArticles?.length ?? 0}</p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-1/3 relative">
          <span className="absolute top-4 right-4 text-muted-foreground">
            <Radio />
          </span>
          <CardHeader>
            <CardTitle>Published Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{publishedArticles?.length ?? 0}</p>
          </CardContent>
        </Card>
      </div>
    </div>

  )
}