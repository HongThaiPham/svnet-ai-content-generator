import { History, Home, ReceiptText, Settings } from "lucide-react";
export const MENU_LIST = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: ReceiptText,
    path: "/dashboard/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];
