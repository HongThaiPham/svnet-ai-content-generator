"use client";
import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {};
const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="pb-10">
        {children}
        <div className="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed bottom-0 w-full flex items-center justify-center">
          <span className="text-white text-sm">SVNet @ 2024</span>
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default AppProvider;
