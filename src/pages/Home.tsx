
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { FileText, Users, Code } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Manpower Solutions Across India
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Specialized in providing trained and verified staff for online examinations, IT services, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry" className="btn-primary">
                Request Staffing
              </Link>
              <Link to="/services" className="btn-secondary bg-white/10 text-white hover:bg-white/20 border-white">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Trusted Manpower Solutions"
            subtitle="We are a premier manpower outsourcing company operating throughout India, delivering skilled professionals for various industry needs."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-gray-700 mb-6">
                With years of experience in the manpower industry, we specialize in providing highly trained and vetted staff for online examinations, ensuring the smooth and secure conduct of exams across the country. Our comprehensive staffing solutions extend to IT, technical, and non-technical sectors, meeting diverse business needs with precision and professionalism.
              </p>
              <p className="text-gray-700 mb-8">
                Our nationwide presence allows us to deploy qualified personnel in any location throughout India, backed by rigorous verification processes and continuous training programs that maintain our high standards of excellence.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            
            <div className="relative h-96 animate-on-scroll">
              <div className="absolute w-4/5 h-4/5 bg-company-blue-100 rounded-lg bottom-0 right-0"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional staff meeting"
                className="absolute w-4/5 h-4/5 object-cover rounded-lg shadow-xl top-0 left-0 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Services"
            subtitle="We provide comprehensive staffing solutions tailored to your specific requirements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Online Exam Manpower"
              description="Trained and verified staff to ensure smooth and secure execution of online examinations across India."
              icon={<FileText size={24} />}
              linkTo="/services"
            />
            
            <ServiceCard
              title="IT & Technical Staff"
              description="Skilled professionals in various IT domains, from system administrators to software developers and network engineers."
              icon={<Code size={24} />}
              linkTo="/services"
            />
            
            <ServiceCard
              title="Non-Technical Staff"
              description="Qualified personnel for administrative, customer service, and operational roles to support your business functions."
              icon={<Users size={24} />}
              linkTo="/services"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-company-blue-800 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="Delivering consistent results across India"
            light={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-200">500+</div>
              <p className="text-lg">Cities Covered</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-200">1000+</div>
              <p className="text-lg">Exam Centers</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-200">10,000+</div>
              <p className="text-lg">Staff Deployed</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur rounded-lg animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-company-blue-200">50+</div>
              <p className="text-lg">Major Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about our manpower solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="ExamStaffPro has been instrumental in ensuring the smooth conduct of our nationwide exams. Their staff is well-trained, punctual and professional."
              name="Rajesh Kumar"
              position="Operations Director"
              company="Leading Examination Board"
            />
            
            <TestimonialCard
              quote="We've been working with this team for our IT staffing needs for over 3 years. Their candidates are technically strong and culturally fit with our organization."
              name="Priya Sharma"
              position="HR Manager"
              company="Tech Solutions Ltd"
            />
            
            <TestimonialCard
              quote="Their PAN India presence has helped us conduct CBT exams simultaneously across multiple locations with consistent quality and zero issues."
              name="Vikram Singh"
              position="Project Lead"
              company="National Testing Agency"
            />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Valued Clients"
            subtitle="Trusted by leading organizations across India"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Client logos would go here - using placeholder boxes for now */}
            <div className="h-20 bg-white rounded-md shadow-sm flex items-center justify-center p-4 animate-on-scroll">
              <div className="text-company-blue-700 font-bold">TCS iON</div>
            </div>
            <div className="h-20 bg-white rounded-md shadow-sm flex items-center justify-center p-4 animate-on-scroll">
              <div className="text-company-blue-700 font-bold">NSEIT</div>
            </div>
            <div className="h-20 bg-white rounded-md shadow-sm flex items-center justify-center p-4 animate-on-scroll">
              <div className="text-company-blue-700 font-bold">Aptech</div>
            </div>
            <div className="h-20 bg-white rounded-md shadow-sm flex items-center justify-center p-4 animate-on-scroll">
              <div className="text-company-blue-700 font-bold">IBPS</div>
            </div>
            <div className="h-20 bg-white rounded-md shadow-sm flex items-center justify-center p-4 animate-on-scroll">
              <div className="text-company-blue-700 font-bold">NTA</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/clients" className="btn-primary">
              View All Clients
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-company-blue-800 to-company-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Staffing Needs?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today to discuss how our manpower solutions can help your organization achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry" className="btn-primary bg-white text-company-blue-800 hover:bg-gray-100">
                Request Staffing
              </Link>
              <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
