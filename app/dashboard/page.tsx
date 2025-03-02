import ArticleCard from "@/components/ui/article-cards";
import CreateArticle from "@/components/ui/create-new-article";
import { Separator } from "@/components/ui/separator";

export default function Dashboard(){
  return(
    <div className="w-full space-y-4">
      <ArticleCard />
      <Separator />
      <CreateArticle />
    </div>
  )
}