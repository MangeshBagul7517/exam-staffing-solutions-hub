import SectionHeading from "@/components/SectionHeading";
import { Globe, Clock, CheckCheck, Shield, FileCheck, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              The advantages that make ExamStaffPro the premier choice for manpower solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Key Advantages Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Key Advantages"
            subtitle="What sets ExamStaffPro apart from other manpower service providers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">PAN India Presence</h3>
              <p className="text-gray-600">
                With operations in over 500 cities across India, we have the geographical reach to deploy qualified personnel wherever you need them. Our extensive network allows us to provide manpower solutions for nationwide projects with consistent quality and standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <CheckCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Verified & Trained Staff</h3>
              <p className="text-gray-600">
                All our personnel undergo comprehensive background checks, identity verification, and credential validation. Additionally, we provide role-specific training to ensure they meet the exact requirements of their assigned positions and deliver professional service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">24/7 Coordination</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to address any concerns or requirements. Whether it's an emergency replacement, additional staffing, or issue resolution, our responsive coordinators ensure seamless operations throughout your project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Compliance Adherence</h3>
              <p className="text-gray-600">
                We strictly adhere to all statutory regulations including EPF, ESIC, labor laws, and other compliance requirements. Our meticulous documentation and legal compliance give you peace of mind and protect your organization from potential liabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Quality Assurance</h3>
              <p className="text-gray-600">
                Our robust quality management system includes regular performance monitoring, feedback collection, and continuous improvement processes. We maintain stringent quality standards to ensure that our staff consistently deliver exceptional service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="bg-company-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-company-blue-600 mb-6">
                <Coins size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Cost-effective Solutions</h3>
              <p className="text-gray-600">
                Our efficient operations, scale of service, and optimized processes allow us to provide competitive pricing without compromising on quality. We help you manage your staffing costs while ensuring access to qualified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <SectionHeading 
                title="Industry Experience" 
                subtitle="Over a decade of expertise in manpower management" 
                centered={false}
              />
              
              <p className="text-gray-700 mb-6">
                With more than 10 years of experience in the manpower industry, we've developed deep expertise in understanding staffing requirements across various sectors, particularly in the education and examination domain.
              </p>
              
              <p className="text-gray-700 mb-8">
                Our team has successfully managed staffing for:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">1000+ examination centers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">200+ CBT exam projects</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">50+ major clients</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">100+ campus recruitment drives</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">10,000+ staff deployed</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <span className="text-gray-700">30+ government tenders</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg top-0 left-0"></div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Professional staffing experience"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl bottom-0 right-0 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Satisfaction"
            subtitle="Our commitment to excellence translates into high client retention"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">95%</div>
              <p className="text-lg text-gray-600">Client Retention Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">98%</div>
              <p className="text-lg text-gray-600">On-time Staff Deployment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">4.8/5</div>
              <p className="text-lg text-gray-600">Average Client Rating</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">70%</div>
              <p className="text-lg text-gray-600">Business from Referrals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Quality Process"
            subtitle="How we ensure consistent high standards across all our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Recruitment & Verification</h3>
              <p className="text-gray-600">
                We employ a rigorous selection process that includes background checks, skill assessments, and credential validation to ensure we onboard only qualified professionals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Training & Development</h3>
              <p className="text-gray-600">
                All our staff undergo comprehensive training programs tailored to their specific roles, ensuring they possess the necessary skills and knowledge to perform effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Monitoring & Feedback</h3>
              <p className="text-gray-600">
                Our quality assurance team continuously monitors performance, collects client feedback, and implements improvements to maintain our high standards of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg bottom-0 left-0"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Technology integration"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl top-0 right-0 z-10"
              />
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <SectionHeading 
                title="Technology-Enabled Solutions" 
                subtitle="Leveraging technology for efficient manpower management" 
                centered={false}
              />
              
              <p className="text-gray-700 mb-6">
                We've invested in advanced technology platforms to streamline our operations and enhance service delivery:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Staff Tracking System</span>
                    <p className="text-gray-600">Real-time monitoring of staff attendance, location, and performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Digital Onboarding</span>
                    <p className="text-gray-600">Efficient staff registration, verification, and documentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Client Portal</span>
                    <p className="text-gray-600">Easy access to reports, invoices, and service requests</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-company-blue-100 p-1 rounded-full mr-3 mt-1">
                    <CheckCheck size={16} className="text-company-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Mobile App</span>
                    <p className="text-gray-600">For staff to access assignments, report issues, and receive updates</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-company-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Partner with ExamStaffPro for reliable, efficient, and professional manpower solutions that meet your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-company-blue-700 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link to="/enquiry" className="btn-primary bg-company-blue-600 text-white hover:bg-company-blue-700">
                Request Staffing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
