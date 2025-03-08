import { fetchArticles, userArticles } from "@/services/articles";
import fetchDraftArticles from "@/services/draft-articles";
import fetchPublishedArticles from "@/services/published-articles";
import { Article } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export function useAllArticles(){
  return useQuery<Article[]>({
    queryKey: ['fetchArticles'],
    queryFn: fetchArticles,
    // staleTime: 10 * 60 * 1000, // 10 minutes
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  })
}



export function useUserAllArticles(){
  return useQuery<Article[]>({
    queryKey: ['userArticles'],
    queryFn: userArticles
  })
}

export function useDraftArticles(){
  return useQuery<Article[]>({
      queryKey: ['fetchDraftArticles'],
      queryFn: fetchDraftArticles
  })
}

export function usePublishedArticles(){
  return useQuery<Article[]>({
    queryKey: ['fetchPublishedArticles'],
    queryFn: fetchPublishedArticles
  })
}
