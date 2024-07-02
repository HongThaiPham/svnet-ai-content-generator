"use client";
import AiFormInput from "@/components/AiFormInput";
import AiOutput from "@/components/AiOutput";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/lib/AiModel";
import { TEMPLATE_LIST, TemplateType } from "@/lib/contants";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import { SaveAiOuput } from "../_actions/SaveAiOutput";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetUsageCredit } from "@/app/_actions/GetUsageCredit";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const AiPage: React.FC<Props> = ({ params: { slug } }) => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const queryClient = useQueryClient();
  const router = useRouter();

  const selectedTemplate: TemplateType | undefined = useMemo(
    () => TEMPLATE_LIST.find((item) => item.slug === slug),
    [slug]
  );

  const handleGenerate = useCallback(
    async (data: any) => {
      const usageCredit:
        | {
            totalCredits: number;
            usedCredit: number;
          }
        | undefined = await queryClient.getQueryData(["usage-credit"]);

      if (usageCredit) {
        if (usageCredit.usedCredit >= usageCredit.totalCredits) {
          alert("You have used all your credits");
          router.push("/dashboard/billing");
          return;
        }
      }

      setLoading(true);
      try {
        const prompt = selectedTemplate?.prompt;
        const submitPrompt = `${JSON.stringify(data)}, ${prompt}`;
        const result = await chatSession.sendMessage(submitPrompt);
        const ouput = result.response.text();
        setOutput(ouput);
        await SaveAiOuput(data, slug, ouput);
        await queryClient.invalidateQueries({
          queryKey: ["usage-credit"],
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [queryClient, router, selectedTemplate?.prompt, slug]
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
        <AiFormInput
          template={selectedTemplate}
          onGenerate={handleGenerate}
          isLoading={loading}
        />
        <div className="md:col-span-2">
          <AiOutput content={output} />
        </div>
      </div>
    </div>
  );
};

export default AiPage;
