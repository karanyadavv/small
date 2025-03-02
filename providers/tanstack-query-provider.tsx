"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 10*(60*1000), // 10 mins
        gcTime: 15*(60*1000), // 15 mins
        refetchOnMount: false,
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}