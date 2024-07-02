import { UserProfile } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SettingsPage: React.FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center h-full p-5">
      <UserProfile />
    </div>
  );
};

export default SettingsPage;
