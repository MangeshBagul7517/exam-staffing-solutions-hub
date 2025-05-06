
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo?: string;
}

const ServiceCard = ({ title, description, icon, linkTo = "/services" }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col animate-on-scroll">
      <div className="bg-company-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-company-blue-800">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <Link to={linkTo} className="text-company-blue-600 font-medium hover:text-company-blue-800 flex items-center">
        Learn More
        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
