import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React, { PropsWithChildren } from "react";

type Props = {};

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <Navbar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
