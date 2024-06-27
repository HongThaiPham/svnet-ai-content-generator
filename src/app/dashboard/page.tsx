"use client";
import SearchSection from "@/components/SearchSection";
import TemplateList from "@/components/TemplateList";
import React from "react";

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  const [keyword, setKeyword] = React.useState<string>("");
  return (
    <div>
      <SearchSection onKeywordChange={setKeyword} />
      <TemplateList keyword={keyword} />
    </div>
  );
};

export default DashboardPage;
