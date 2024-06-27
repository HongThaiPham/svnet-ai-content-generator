"use client";
import { TemplateType } from "@/lib/contants";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { FormControl, FormDescription, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
type Props = {
  template?: TemplateType;
};

const AiFormInput: React.FC<Props> = ({ template }) => {
  if (!template) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="space-y-3">
          <Image
            src={template.icon}
            alt={template.name}
            width={70}
            height={70}
          />
          <h2 className="text-2xl font-bold">{template.name}</h2>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          {template.formControls.map((control, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-bold">{control.label}</label>
              {control.field === "input" ? (
                <Input />
              ) : control.field === "textarea" ? (
                <Textarea />
              ) : null}
            </div>
          ))}
          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Generate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AiFormInput;
