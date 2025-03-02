import { Plus } from "lucide-react";
import { Button } from "./button";

export default function CreateArticle(){
  return(
    <div className="p-4 md:p-0 flex flex-col gap-4 mb-6">
      <h3 className="pl-2 text-md font-semibold">Create a new Article</h3>
      <Button variant={"outline"} className="w-full md:w-1/3 h-16 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
        <Plus />
      </Button>
    </div>
  )
}