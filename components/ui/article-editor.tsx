"use client"

import { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { Editor } from "./DynamicEditor";
import { useUser } from "@clerk/nextjs";
import { Block } from "@blocknote/core";

export function ArticleEditor(){
  const [ title, setTitle ] = useState("");
  const [ blocks, setBlocks ] = useState<String>();
  const [ slug, setSlug ] = useState("");
  const { user } = useUser();
  

  
  const saveToState = (jsonBlocks: string) => {
    setBlocks(JSON.stringify(jsonBlocks));
    console.log(jsonBlocks);

  }

  const handleTtitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const generateSlug = () => {
    if(!title) return;
    const slugified = title
      .toLowerCase()
      .split(" ").slice(0,3).join(" ")
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
    setSlug(slugified);
  }


  const publishArticle = async() => {
    const response  = await fetch("/api/articles/all", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        content: blocks,
        publishStatus: "published",
        authorId: user?.id
      })
    })
    return response.json();
  }
  return (
  <div className="space-y-12">
    <div className="md:max-w-[80%] space-y-8">

      <div className="space-y-4">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={handleTtitleChange}
          placeholder="Enter article title"
          className="w-full"
          />
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <Label htmlFor="slug">Slug</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4"/>
              </TooltipTrigger>
              <TooltipContent>
                <p>This will be your article URL</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-2">
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="article-slug"
            className="w-full"
            />
          <Button type="button" variant="outline" onClick={generateSlug} disabled={!title}>
            Generate
          </Button>
        </div>
      </div>
    </div>
      <div className="w-full">
        <Editor 
          onChange={saveToState} />
        <div className="space-x-4 mb-12">

        <Button variant={"outline"} onClick={publishArticle}>Publish</Button>
        <Button variant={"default"}>Save as draft</Button>
        </div>
      </div>
  </div>
)}