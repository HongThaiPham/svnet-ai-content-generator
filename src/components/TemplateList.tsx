"use client";
import { TEMPLATE_LIST, TemplateType } from "@/lib/contants";
import React, { useEffect, useMemo } from "react";
import TemplateCard from "./TemplateCard";

type Props = {
  keyword: string;
};

const TemplateList: React.FC<Props> = ({ keyword }) => {
  const filteredList = useMemo(
    () =>
      TEMPLATE_LIST.filter((template) => {
        return template.name.toLowerCase().includes(keyword.toLowerCase());
      }),
    [keyword]
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {filteredList.map((template: TemplateType, index) => (
        <TemplateCard key={index} item={template} />
      ))}
    </div>
  );
};

export default TemplateList;
