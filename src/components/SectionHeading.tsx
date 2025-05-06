
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} animate-on-scroll`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-company-blue-800"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-gray-300" : "text-gray-600"} max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-company-blue-500 mt-4 ${centered ? "mx-auto" : ""}`}></div>
    </div>
  );
};

export default SectionHeading;
