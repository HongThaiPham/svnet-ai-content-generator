"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import { GetUsageCredit } from "@/app/_actions/GetUsageCredit";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const UsageTrack: React.FC<Props> = ({}) => {
  const usageCredit = useQuery({
    queryKey: ["usage-credit"],
    queryFn: () => GetUsageCredit(),
  });

  const credits = useMemo(() => {
    return (
      usageCredit.data || {
        totalCredits: 10000,
        usedCredit: 0,
      }
    );
  }, [usageCredit.data]);

  console.log(credits);

  return (
    <div className="m-5 space-y-3">
      <div className="bg-emerald-500 text-white rounded-lg p-3 space-y-3">
        <h2>Credits</h2>
        <div>
          <Progress
            value={Number(
              ((credits.usedCredit / credits.totalCredits) * 100).toFixed(2)
            )}
          />
          <span className="text-xs">
            {`${credits.usedCredit.toLocaleString()} / ${credits.totalCredits.toLocaleString()}`}{" "}
            credit used
          </span>
        </div>
      </div>
      <Button
        variant={"secondary"}
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
      >
        <Rocket className="mr-2 h-4 w-4" />
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
