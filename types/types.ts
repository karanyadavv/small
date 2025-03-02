export interface Article{
  id: string,
  title: string,
  content: string,
  publishStatus: string,
  publishedAt?: Date,
  updatedAt: Date,
  authorId: string
}

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
