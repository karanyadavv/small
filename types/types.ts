import { z } from "zod";


export const articleSchema = z.object({
  id: z.string(),
  title: z.string().min(5, "Title should be atleast 5 characters long"),
  slug: z.string().min(1, "Slug must be at least 1 character"),
  content: z.string().min(50, "Article content should be at least 50 characters long"),
  publishStatus: z.enum(["draft", "published"]),
  publishedAt: z.string().datetime().nullable(),
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  authorId: z.string()
})

export type Article = z.infer<typeof articleSchema>;


export interface User{
  id: string,
  name: string,
  email: string,
  articles: Article[],
  comments: Comment[],
  likes: Like[],
}

export interface Comment {
  id: string;
  content: string;
  articleId: string;
  userId: string;
  createdAt: Date;
}

export interface Like {
  id: string;
  userId: string;
  articleId: string;
}
