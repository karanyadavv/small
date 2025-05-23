"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useUserAllArticles } from "@/hooks/useArticle";
import { Skeleton } from "./skeleton";
import { Button } from "./button";
import { SquarePen, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";



export function ArticlesTable() {
  const { data: allArticles, isError, isLoading } = useUserAllArticles();

  // Loading state rendering
  if (isLoading) {
    return (
      <div className="w-full overflow-x-auto">
        <Table>
          <TableCaption>Loading articles...</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] sm:w-[400px]">Title</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Publish Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(2)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="w-[40%] sm:w-[400px]">
                  <Skeleton className="h-4 w-full max-w-[15rem]" />
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Skeleton className="h-4 w-full max-w-[6.25rem]" />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <Skeleton className="h-4 w-full max-w-[6.25rem]" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-full max-w-[6.25rem] ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
  //Empty state
  if (isError) {
    return (
      <Table>
        <TableCaption>No articles found.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Publish Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              You have no articles yet.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
  
  return (
    <Table>
      <TableCaption>A list of your articles.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Publish Date</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allArticles?.map((articles) => (
          <TableRow key={articles.id}>
            <TableCell className="font-medium">{articles.title.slice(0,35)}</TableCell>
            <TableCell>{articles.publishStatus}</TableCell>
            <TableCell>{articles.publishedAt ? new Date(articles.publishedAt).toLocaleDateString() : "Not available"}</TableCell>
            <TableCell>{articles.slug}</TableCell>
            <TableCell className="space-x-2 text-right">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant={"outline"} className="h-8 w-8 cursor-pointer">
                    <SquarePen />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit article</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant={"destructive"} className="h-8 w-8 cursor-pointer">
                    <Trash2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete article</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
