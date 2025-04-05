"use client"; // this registers <Editor> as a Client Component
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
 

interface EditorProps {
  onChange: (content: string) => void;
  initialContent?: string;
};
// Our <Editor> component we can reuse later
const Editor = ({
  onChange,
  initialContent
}: EditorProps) => {
  
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
      className="p-4 w-full min-h-[200px] resize-y overflow-auto rounded-md border bg-transparent mb-12"
      onChange={() => {
        onChange(JSON.stringify(editor.document, null, 2));
      }}
      >
      </BlockNoteView>
    </div>

)}

export default Editor;