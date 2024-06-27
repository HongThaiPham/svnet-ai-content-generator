import { TemplateType } from "@/lib/contants";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type Props = {
  item: TemplateType;
};

const TemplateCard: React.FC<Props> = ({ item }) => {
  return (
    <Card className="hover:scale-105 transition-all duration-300 cursor-pointer">
      <CardHeader>
        <CardTitle className="space-y-3">
          <Image src={item.icon} alt={item.name} width={50} height={50} />
          <h2 className="text-lg font-medium">{item.name}</h2>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {item.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TemplateCard;
