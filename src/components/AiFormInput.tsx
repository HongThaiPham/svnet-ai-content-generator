"use client";
import { TemplateType } from "@/lib/contants";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2, Sparkles } from "lucide-react";
type Props = {
  template?: TemplateType;
  onGenerate?: (data: any) => void;
  isLoading?: boolean;
};

const AiFormInput: React.FC<Props> = ({ template, onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
          <div className="text-2xl font-bold">{template.name}</div>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {template.formControls.map((control, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-bold">{control.label}</label>
              {control.field === "input" ? (
                <Input
                  name={control.name}
                  required={control.required}
                  onChange={handleInputChange}
                />
              ) : control.field === "textarea" ? (
                <Textarea
                  name={control.name}
                  required={control.required}
                  onChange={handleInputChange}
                />
              ) : null}
            </div>
          ))}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center gap-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => onGenerate && onGenerate(formData)}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="h-5 w-5" />
              )}
              Generate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AiFormInput;
