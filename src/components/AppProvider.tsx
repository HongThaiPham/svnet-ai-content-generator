import React, { PropsWithChildren } from "react";

type Props = {};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="pb-10">
      {children}
      <div className="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed bottom-0 w-full flex items-center justify-center">
        <span className="text-white text-sm">SVNet @ 2024</span>
      </div>
    </main>
  );
};

export default AppProvider;
