import { TEMPLATE_LIST, TemplateType } from "@/lib/contants";
import React from "react";
import TemplateCard from "./TemplateCard";

type Props = {};

const TemplateList: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {TEMPLATE_LIST.map((template: TemplateType, index) => (
        <TemplateCard key={index} item={template} />
      ))}
    </div>
  );
};

export default TemplateList;
