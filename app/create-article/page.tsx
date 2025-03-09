import { ArticleEditor } from "@/components/ui/article-editor";

export default function CreateArticle() {
  return (
    <div className="flex flex-col w-full md:max-w-[1160px] mx-auto mt-12 gap-12">
        <h1 className="text-3xl font-bold mb-6">Create Article</h1>
      <div className="w-full">
        <ArticleEditor />
      </div>
    </div>
  )
}
