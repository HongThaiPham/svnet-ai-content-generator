import SearchSection from "@/components/SearchSection";
import TemplateList from "@/components/TemplateList";
import React from "react";

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  return (
    <div>
      <SearchSection />
      <TemplateList />
    </div>
  );
};

export default DashboardPage;
