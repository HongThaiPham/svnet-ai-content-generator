"use client";
import React, { use, useCallback, useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useToast } from "./ui/use-toast";

type Props = {
  content?: string;
};

const AiOutput: React.FC<Props> = ({ content }) => {
  const editorRef = useRef<Editor | null>(null);
  const { toast } = useToast();
  const handleEditorChange = useCallback(() => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  }, []);

  useEffect(() => {
    if (content) {
      editorRef.current?.getInstance().setMarkdown(content);
    }
  }, [content]);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="font-medium text-lg">AI Output</div>
            <Button
              variant={"outline"}
              className="bg-indigo-500 hover:bg-indigo-600 hover:text-white text-white"
              onClick={() => {
                navigator.clipboard.writeText(
                  editorRef.current?.getInstance().getMarkdown()
                );
                toast({
                  title: "Copied",
                  description: "AI output copied to clipboard",
                });
              }}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Editor
            ref={editorRef}
            initialValue="Your AI output will be displayed here"
            initialEditType="wysiwyg"
            height="600px"
            useCommandShortcut={true}
            onChange={handleEditorChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AiOutput;
