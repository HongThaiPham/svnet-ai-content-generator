import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex items-center justify-between bg-background">
      <div className="flex -gap-2 items-center p-2 rounded-md max-w-lg">
        <Input
          type="search"
          placeholder="Search ..."
          className="outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xs text-white px-5 py-1"
          >
            Join Membership now
          </Badge>
        </Link>
        <SignedIn>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
