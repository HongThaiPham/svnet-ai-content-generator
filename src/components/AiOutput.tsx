"use client";
import React, { useCallback, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

type Props = {};

const AiOutput: React.FC<Props> = ({}) => {
  const editorRef = useRef<Editor | null>(null);
  const handleEditorChange = useCallback(() => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  }, []);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="font-medium text-lg">AI Output</div>
            <Button
              variant={"outline"}
              className="bg-indigo-500 hover:bg-indigo-600 hover:text-white text-white"
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
