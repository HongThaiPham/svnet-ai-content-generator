"use client";
import React, { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetHistory } from "./_actions/GetHistory";
import Image from "next/image";
import { TEMPLATE_LIST } from "@/lib/contants";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { Loader, Loader2 } from "lucide-react";

type Props = {};

const HistoryPage: React.FC<Props> = ({}) => {
  const { toast } = useToast();

  const { data: history, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => {
      return GetHistory();
    },
  });

  return (
    <div className="p-5">
      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
          <CardDescription>
            Search your previously generate AI content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
            <h2 className="col-span-2">TEMPLATE</h2>
            <h2 className="col-span-2">AI RESP</h2>
            <h2>DATE</h2>
            <h2>WORDS</h2>
            <h2>COPY</h2>
          </div>
          {isLoading && (
            <div className="h-[200px] flex items-center justify-center">
              <Loader2 className="animate-spin w-10 h-10 text-indigo-500" />
            </div>
          )}
          {history &&
            history.map((hist) => (
              <div
                className="grid grid-cols-7 my-5 py-3 px-3 items-center"
                key={hist.id}
              >
                {TEMPLATE_LIST.find(
                  (item) => item.slug === hist.templateSlug
                ) ? (
                  <h2 className="col-span-2 flex gap-2 items-center">
                    <Image
                      src={
                        TEMPLATE_LIST.find(
                          (item) => item.slug === hist.templateSlug
                        )?.icon || ""
                      }
                      alt={hist.templateSlug}
                      width={25}
                      height={25}
                    />
                    {TEMPLATE_LIST.find(
                      (item) => item.slug === hist.templateSlug
                    )?.name || ""}
                  </h2>
                ) : null}
                <h2 className="col-span-2 line-clamp-3 mr-3">
                  {hist.aiResponse}
                </h2>
                <h2>{hist.createdAt}</h2>
                <h2>{hist.aiResponse?.length}</h2>
                <h2>
                  <Button
                    variant={"secondary"}
                    onClick={() => {
                      navigator.clipboard.writeText(hist.aiResponse || "");
                      toast({
                        title: "Copied",
                        description: "AI Response copied to clipboard",
                      });
                    }}
                  >
                    Copy
                  </Button>
                </h2>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryPage;
