"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
 
// Our <Editor> component we can reuse later
export default function Editor() {
  const { resolvedTheme } = useTheme();
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Start writing your article here"
      }
    ]
  });
 
  // Renders the editor instance using a React component.
  return (
    <div>
      <BlockNoteView 
      editor={editor} 
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      >
      </BlockNoteView>
    </div>

)}