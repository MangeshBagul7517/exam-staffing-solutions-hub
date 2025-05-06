
import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatsCard = ({ icon, value, label }: StatsCardProps) => {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 animate-on-scroll">
      <div className="bg-company-blue-50 p-4 rounded-lg mr-5">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-company-blue-800">{value}</h3>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
