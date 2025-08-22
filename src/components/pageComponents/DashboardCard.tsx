import React from "react";
import { type LucideIcon } from "lucide-react";

type CardDetails = {
  category: string;
  value: string;
  icon: LucideIcon;
  style: string;
};

const DashboardCard = ({ category, value, icon, style }: CardDetails) => {
  let Icon = icon;
  return (
    <div className="flex gap-6 p-5 bg-white rounded-lg items-center">
      <div className={` ${style} p-2 rounded-full flex items-center justify-center w-12 h-12`}>
        <Icon className="p-1 rounded-full w-10 h-10 text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-gray-600">{category}</h2>
        <p className="text-black font-bold text-2xl">${value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
