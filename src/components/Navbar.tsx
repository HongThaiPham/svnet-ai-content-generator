import { MENU_LIST } from "@/lib/contants";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

type Props = {};

const Navbar: React.FC<Props> = ({}) => {
  return (
    <div className="h-screen p-5 shadow-sm border space-y-4">
      <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-md shadow-md">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        <h1 className="text-sm font-bold text-white">AI Content Generator</h1>
      </div>

      <div>
        <Separator className="my-6" />
        {MENU_LIST.map((menu) => (
          <Link key={menu.name} href={menu.path}>
            <div className="flex gap-2 mb-2 p-3  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transition-colors duration-300 rounded-md cursor-pointer">
              <menu.icon />
              <h1>{menu.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
