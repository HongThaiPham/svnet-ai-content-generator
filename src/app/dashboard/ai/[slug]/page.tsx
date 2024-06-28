import AiFormInput from "@/components/AiFormInput";
import AiOutput from "@/components/AiOutput";
import { Button } from "@/components/ui/button";
import { TEMPLATE_LIST, TemplateType } from "@/lib/contants";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
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
    <div className="p-5 sapce-y-5">
      <Link href="/dashboard">
        <Button>
          <MoveLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <AiFormInput template={selectedTemplate} />
        <div className="md:col-span-2">
          <AiOutput />
        </div>
      </div>
    </div>
  );
};

export default AiPage;
