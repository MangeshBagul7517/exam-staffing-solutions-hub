
import SectionHeading from "@/components/SectionHeading";
import { Shield, Award, Users, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About ExamStaffPro
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your trusted partner for professional manpower solutions across India
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <SectionHeading 
                title="Our Journey" 
                subtitle="From a small team to a nationwide manpower solution provider" 
                centered={false}
              />
              
              <p className="text-gray-700 mb-6">
                Founded in 2010, ExamStaffPro began as a specialized agency focused on providing trained personnel for examination centers. Recognizing the growing need for reliable staffing solutions in the education sector, our founders set out to create a company that would set new standards in manpower services.
              </p>
              
              <p className="text-gray-700 mb-6">
                As the demand for online examinations grew across India, we expanded our services to cover more cities and examination boards. Our commitment to providing well-trained, vetted staff quickly earned us a reputation for reliability and excellence in the industry.
              </p>
              
              <p className="text-gray-700">
                Today, with operations in over 500 cities across India, we've grown to become one of the country's leading manpower solution providers, specializing in online examination staffing while also offering comprehensive IT, technical, and non-technical personnel services to diverse industries.
              </p>
            </div>
            
            <div className="relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg top-0 right-0"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Company growth journey"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl bottom-0 left-0 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Guiding principles that shape our organization"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 text-company-blue-800">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To deliver exceptional manpower solutions that enable organizations to conduct examinations and operations with complete integrity, security, and efficiency, while providing meaningful employment opportunities across India.
              </p>
              <p className="text-gray-700">
                We are committed to upholding the highest standards of professionalism, ensuring compliance with all statutory regulations, and creating value for our clients, employees, and the broader community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4 text-company-blue-800">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be India's most trusted and preferred manpower solutions provider, recognized for our integrity, quality of service, and nationwide capability to deploy skilled professionals across diverse sectors.
              </p>
              <p className="text-gray-700">
                We aspire to set industry benchmarks in staff training, verification, and management systems, and to be known for our innovative approach to addressing evolving workforce challenges in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our operations and relationships"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mx-auto mb-6">
                <Shield size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty, transparency, and ethical conduct in all our operations and relationships.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mx-auto mb-6">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, continuously improving our processes, services, and the skills of our team.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mx-auto mb-6">
                <Briefcase size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Reliability</h3>
              <p className="text-gray-600">
                Our clients can depend on us to deliver consistent, high-quality service, meeting their staffing needs with precision and timeliness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="bg-company-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-company-blue-600 mx-auto mb-6">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">People-Centric</h3>
              <p className="text-gray-600">
                We value our employees and the workforce we deploy, investing in their development, well-being, and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experienced professionals guiding our organization"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="w-32 h-32 bg-company-blue-200 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-company-blue-800 font-bold text-5xl">
                  RS
                </div>
              </div>
              <h3 className="text-xl font-bold text-company-blue-800">Rajiv Sharma</h3>
              <p className="text-company-blue-600 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in human resources and manpower management, Rajiv has been instrumental in scaling ExamStaffPro across India.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="w-32 h-32 bg-company-blue-200 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-company-blue-800 font-bold text-5xl">
                  AP
                </div>
              </div>
              <h3 className="text-xl font-bold text-company-blue-800">Anjali Patel</h3>
              <p className="text-company-blue-600 mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 mb-4">
                Anjali oversees our nationwide operations, ensuring seamless delivery of manpower services across 500+ cities with a focus on quality and efficiency.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center animate-on-scroll">
              <div className="w-32 h-32 bg-company-blue-200 rounded-full mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-company-blue-800 font-bold text-5xl">
                  VK
                </div>
              </div>
              <h3 className="text-xl font-bold text-company-blue-800">Vikrant Khanna</h3>
              <p className="text-company-blue-600 mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 mb-4">
                Vikrant leads our technology initiatives, developing innovative solutions for manpower deployment, tracking, and quality assurance systems.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-company-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="How we deliver consistent quality across India"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Rigorous Selection</h3>
              <p className="text-gray-700">
                We employ a comprehensive screening process that includes background checks, skill assessments, and verification of credentials to ensure only qualified professionals join our workforce.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Continuous Training</h3>
              <p className="text-gray-700">
                Our staff undergoes regular training programs to enhance their skills, stay updated with the latest industry practices, and maintain the high standards expected by our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Quality Assurance</h3>
              <p className="text-gray-700">
                With a robust monitoring system and dedicated quality assurance team, we ensure consistent service delivery and address any concerns promptly, maintaining our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-company-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with ExamStaffPro</h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience the difference of working with India's premier manpower solutions provider. Our nationwide presence and specialized expertise ensure your staffing needs are met with precision and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-company-blue-700 hover:bg-gray-100">
                Contact Our Team
              </a>
              <a href="/enquiry" className="btn-secondary border-white text-white hover:bg-white/10">
                Request Staffing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
