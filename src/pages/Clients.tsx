
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Clients
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Trusted by leading organizations across India for reliable manpower solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Major Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Major Clients"
            subtitle="Partnering with industry leaders across multiple sectors"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Client logos would go here - using placeholder boxes for now */}
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">TCS iON</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">NSEIT</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">Aptech</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">IBPS</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">NTA</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">EdCIL</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">SSC</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">UPSC</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">Infosys</div>
            </div>
            <div className="h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-6 animate-on-scroll card-hover">
              <div className="text-company-blue-700 font-bold text-xl">Wipro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industry Sectors We Serve"
            subtitle="Providing specialized manpower solutions across diverse sectors"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Education & Examination</h3>
              <p className="text-gray-700 mb-6">
                Our flagship service area, providing trained personnel for online examinations, CBT tests, and campus recruitment drives across India.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Examination Boards</li>
                <li>Testing Agencies</li>
                <li>Universities</li>
                <li>Educational Institutions</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Information Technology</h3>
              <p className="text-gray-700 mb-6">
                Providing skilled IT professionals for technical roles, software development, system administration, and technical support.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>IT Services Companies</li>
                <li>Software Development Firms</li>
                <li>Tech Startups</li>
                <li>IT Infrastructure Providers</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Banking & Finance</h3>
              <p className="text-gray-700 mb-6">
                Delivering qualified personnel for roles in banking operations, customer service, back-office support, and data processing.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Banks</li>
                <li>Financial Institutions</li>
                <li>Insurance Companies</li>
                <li>Financial Service Providers</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Government & Public Sector</h3>
              <p className="text-gray-700 mb-6">
                Supporting government agencies and public sector organizations with staffing for examinations, projects, and administrative requirements.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Government Departments</li>
                <li>Public Sector Undertakings</li>
                <li>Regulatory Bodies</li>
                <li>Municipal Corporations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Healthcare</h3>
              <p className="text-gray-700 mb-6">
                Providing non-clinical staff for healthcare institutions, including administrative, data entry, and support roles.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Hospitals</li>
                <li>Clinics</li>
                <li>Healthcare Service Providers</li>
                <li>Medical Research Organizations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-4 text-company-blue-800">Corporate Sector</h3>
              <p className="text-gray-700 mb-6">
                Delivering manpower solutions for various corporate requirements, from administrative support to specialized technical roles.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Multinational Corporations</li>
                <li>Indian Conglomerates</li>
                <li>Medium Enterprises</li>
                <li>Startups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Success Stories"
            subtitle="How our manpower solutions have contributed to our clients' success"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Nationwide CBT Examination</h3>
              <p className="text-gray-600 mb-4">
                A leading examination board needed to conduct Computer Based Tests across 120 cities simultaneously, requiring over 3,000 trained staff within a tight timeline.
              </p>
              <div className="border-l-4 border-company-blue-500 pl-4 mb-4">
                <p className="text-gray-700 italic">
                  "ExamStaffPro deployed verified and trained staff across all our examination centers. Their seamless coordination and quality of personnel ensured the smooth conduct of our nationwide examination without any issues."
                </p>
                <p className="text-company-blue-700 font-medium mt-2">- Examination Controller, National Testing Agency</p>
              </div>
              <p className="text-gray-600">
                <span className="font-medium">Results:</span> Successfully delivered staff across 120 cities with 99.8% attendance and zero reported incidents.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">IT Department Staffing</h3>
              <p className="text-gray-600 mb-4">
                A rapidly growing IT company needed to quickly scale their technical support team with 50 qualified professionals across multiple locations in India.
              </p>
              <div className="border-l-4 border-company-blue-500 pl-4 mb-4">
                <p className="text-gray-700 italic">
                  "When we needed to rapidly expand our IT support team, ExamStaffPro provided pre-screened, skilled professionals who integrated smoothly into our operations, enabling us to meet our growth targets without compromising on service quality."
                </p>
                <p className="text-company-blue-700 font-medium mt-2">- HR Director, Technology Solutions Provider</p>
              </div>
              <p className="text-gray-600">
                <span className="font-medium">Results:</span> Deployed 50 qualified IT professionals within 3 weeks, with 92% retention after 6 months.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/enquiry" className="btn-primary">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about our manpower solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ExamStaffPro has been our trusted partner for online examination staffing for the past 5 years. Their ability to deploy trained personnel across multiple locations simultaneously has been crucial for the success of our nationwide examinations."
              name="Rajesh Kumar"
              position="Operations Director"
              company="National Examination Board"
            />
            
            <TestimonialCard
              quote="The quality of staff provided by ExamStaffPro has consistently exceeded our expectations. Their verification process and training standards ensure we receive professionals who can deliver excellence from day one."
              name="Priya Sharma"
              position="HR Manager"
              company="IT Solutions Ltd"
            />
            
            <TestimonialCard
              quote="What sets ExamStaffPro apart is their responsive coordination and problem-solving approach. Their 24/7 support team addresses any issues promptly, ensuring our operations continue without disruption."
              name="Vikram Singh"
              position="Project Lead"
              company="Financial Services Corp"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Experience"
            subtitle="Highlights from our extensive work across India"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">200+</div>
              <p className="text-lg text-gray-700 mb-4">CBT Exams</p>
              <p className="text-gray-600">Computer Based Tests conducted successfully across India</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">100+</div>
              <p className="text-lg text-gray-700 mb-4">Campus Recruitments</p>
              <p className="text-gray-600">Campus hiring drives supported with skilled staff</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">30+</div>
              <p className="text-lg text-gray-700 mb-4">Government Tenders</p>
              <p className="text-gray-600">Successfully executed government manpower contracts</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-700">50+</div>
              <p className="text-lg text-gray-700 mb-4">Major Clients</p>
              <p className="text-gray-600">Long-term relationships with leading organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-company-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience the difference of working with India's leading manpower solutions provider. Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-company-blue-800 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link to="/enquiry" className="btn-secondary border-white text-white hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
