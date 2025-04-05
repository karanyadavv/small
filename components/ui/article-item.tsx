import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { BlockNoteView } from "@blocknote/mantine";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";

export default function ArticleItem({ article }: { article: any }) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: JSON.parse(article.content) as PartialBlock[]
  });

  return (
    <div className="w-full sm:max-w-2xl text-pretty text-xl font-bold tracking-[-0.015em] text-gray-950">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-extrabold text-xl hover:underline cursor-pointer transition-all duration-500">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BlockNoteView
            editor={editor}
            editable={false}
          />
        </CardContent>
        <CardFooter>
          <Button variant={"outline"}>
            Read more<ChevronRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}