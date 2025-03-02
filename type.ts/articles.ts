export interface Article{
  id: string,
  title: string,
  content: string,
  publishStatus: string,
  publishedAt?: Date,
  updatedAt: Date,
  authorId: string
}
