import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { FileText, Code, Users, CheckCheck, ShieldCheck, Headphones } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive manpower solutions tailored to meet your specific requirements
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Specialized Staffing Solutions"
            subtitle="We provide trained and verified manpower across various domains to meet your operational needs"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
            <p className="text-gray-700">
              At ExamStaffPro, we understand that every organization has unique staffing requirements. Our comprehensive manpower solutions are designed to provide you with qualified professionals who can seamlessly integrate with your team and contribute to your organization's success.
            </p>
          </div>
        </div>
      </section>

      {/* Online Exam Manpower */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mb-6">
                <FileText size={36} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-company-blue-800">Online Exam Manpower</h2>
              <p className="text-gray-700 mb-6">
                Our flagship service provides trained and verified staff for the smooth and secure conduct of online examinations across India. From center managers to invigilators and technical support staff, we ensure that your examinations run flawlessly.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-company-blue-700">Roles We Provide:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Center Managers & Administrators</li>
                <li>Invigilators & Exam Room Supervisors</li>
                <li>Technical Support Staff</li>
                <li>Registration & Verification Officers</li>
                <li>Biometric Data Capture Specialists</li>
                <li>Security Personnel</li>
                <li>Help Desk Operators</li>
              </ul>
              
              <Link to="/enquiry" className="btn-primary">
                Request Exam Staff
              </Link>
            </div>
            
            <div className="relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg top-0 left-0"></div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Online exam center"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl bottom-0 right-0 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT & Technical Staff */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg bottom-0 right-0"></div>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="IT professionals working"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl top-0 left-0 z-10"
              />
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mb-6">
                <Code size={36} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-company-blue-800">IT & Technical Staff</h2>
              <p className="text-gray-700 mb-6">
                Our IT and technical staffing solutions provide skilled professionals for various technology roles, helping organizations implement, maintain, and optimize their technical infrastructure and systems.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-company-blue-700">Roles We Provide:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>System Administrators</li>
                <li>Network Engineers</li>
                <li>Database Administrators</li>
                <li>Software Developers</li>
                <li>Technical Support Specialists</li>
                <li>IT Project Managers</li>
                <li>Quality Assurance Analysts</li>
                <li>Cyber Security Specialists</li>
                <li>Cloud Infrastructure Engineers</li>
              </ul>
              
              <Link to="/enquiry" className="btn-primary">
                Request IT Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Technical Staff */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mb-6">
                <Users size={36} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-company-blue-800">Non-Technical Staff</h2>
              <p className="text-gray-700 mb-6">
                From administrative support to customer service representatives, our non-technical staffing solutions provide qualified personnel who can enhance your operational efficiency and customer experience.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-company-blue-700">Roles We Provide:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                <li>Administrative Assistants</li>
                <li>Customer Service Representatives</li>
                <li>Data Entry Operators</li>
                <li>Office Managers</li>
                <li>Front Desk Executives</li>
                <li>Call Center Agents</li>
                <li>Human Resources Assistants</li>
                <li>Event Management Staff</li>
                <li>Logistics Coordinators</li>
              </ul>
              
              <Link to="/enquiry" className="btn-primary">
                Request Non-Technical Staff
              </Link>
            </div>
            
            <div className="relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg top-0 right-0"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Office workers collaborating"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl bottom-0 left-0 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Service Features"
            subtitle="What sets our manpower solutions apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-6">
                <CheckCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Rigorous Verification</h3>
              <p className="text-gray-600">
                All our staff undergo comprehensive background checks, identity verification, and credential validation before deployment.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Specialized Training</h3>
              <p className="text-gray-600">
                We provide role-specific training to ensure our staff are well-prepared to meet the requirements of their assigned positions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-6">
                <Headphones size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to address any concerns or requirements that may arise during deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Specialized Services"
            subtitle="Additional manpower solutions to meet specific industry needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 text-company-blue-800">Campus Recruitment Support</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive staffing support for campus recruitment drives, including registration staff, coordinators, technical evaluators, and interview panel assistants.
              </p>
              <p className="text-gray-700 mb-6">
                Our team ensures smooth flow of candidates through various stages of the recruitment process, proper documentation, and handling of logistics.
              </p>
              <Link to="/enquiry" className="text-company-blue-600 font-medium hover:text-company-blue-800 inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 text-company-blue-800">Project-Based Solutions</h3>
              <p className="text-gray-700 mb-4">
                For short-term projects or specific initiatives, we offer project-based staffing solutions that provide the right talent for the duration of your project.
              </p>
              <p className="text-gray-700 mb-6">
                Whether it's a software implementation, a special event, or a temporary business requirement, our team can assemble the right professionals to ensure your project's success.
              </p>
              <Link to="/enquiry" className="text-company-blue-600 font-medium hover:text-company-blue-800 inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Service Process"
            subtitle="How we deliver manpower solutions that meet your specific requirements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
            <div className="relative animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto z-20 relative">1</div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-company-blue-200 z-10"></div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-company-blue-800">Requirement Analysis</h3>
                <p className="text-gray-600">
                  We begin by understanding your specific staffing needs, including the roles, skills, location, and duration of the assignment.
                </p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto z-20 relative">2</div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-company-blue-200 z-10"></div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-company-blue-800">Staff Selection & Training</h3>
                <p className="text-gray-600">
                  We select suitable candidates from our database, conduct verification, and provide role-specific training to ensure readiness.
                </p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto z-20 relative">3</div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-company-blue-800">Deployment & Support</h3>
                <p className="text-gray-600">
                  We deploy the trained staff to your location and provide ongoing support, monitoring, and management throughout the assignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-company-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Staffing Solutions?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss your specific requirements and learn how our manpower solutions can help your organization achieve its objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-company-blue-800 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link to="/enquiry" className="btn-primary bg-company-blue-600 text-white hover:bg-company-blue-700">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
