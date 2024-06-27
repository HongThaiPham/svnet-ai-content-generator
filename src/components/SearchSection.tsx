"use client";
import React from "react";
import { Search } from "lucide-react";

type Props = {
  onKeywordChange: (keyword: string) => void;
};

const SearchSection: React.FC<Props> = ({ onKeywordChange }) => {
  return (
    <div className="p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold  ">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="my-5 w-full flex items-center justify-center">
        <div className="flex items-center gap-2 border p-2 rounded-md bg-white w-[30%]">
          <Search className="text-indigo-500" />
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent outline-none text-muted-foreground w-full"
            onChange={(e) => onKeywordChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
