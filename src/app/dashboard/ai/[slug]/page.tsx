import AiFormInput from "@/components/AiFormInput";
import AiOutput from "@/components/AiOutput";
import { TEMPLATE_LIST, TemplateType } from "@/lib/contants";
import React, { useMemo } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const AiPage: React.FC<Props> = ({ params: { slug } }) => {
  const selectedTemplate: TemplateType | undefined = useMemo(
    () => TEMPLATE_LIST.find((item) => item.slug === slug),
    [slug]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <AiFormInput template={selectedTemplate} />
      <div className="md:col-span-2">
        <AiOutput />
      </div>
    </div>
  );
};

export default AiPage;
