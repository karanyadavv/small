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
import { useAllArticles } from "@/hooks/useArticle";


export function ArticlesTable() {
  const { data: allArticles } = useAllArticles();
  return (
    <Table>
      <TableCaption>A list of your articles.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Publish Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allArticles?.map((articles) => (
          <TableRow key={articles.id}>
            <TableCell className="font-medium">{articles.title.slice(0,35)}</TableCell>
            <TableCell>{articles.publishStatus}</TableCell>
            <TableCell>{articles.publishedAt && "Not available"}</TableCell>
            <TableCell>Edit & Delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
