import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { FileText, Code, Users, Clock, Shield, CheckCheck, MapPin, Phone, Mail } from "lucide-react";

const Enquiry = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Request Staffing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Tell us about your manpower requirements and receive a customized solution
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <SectionHeading
                title="Submit Your Requirements"
                subtitle="We'll create a staffing solution tailored to your needs"
                centered={false}
              />
              
              <p className="text-gray-700 mb-6">
                Whether you need staff for online examinations, IT operations, or other roles, our team will design a customized solution that meets your specific requirements. Please provide as much detail as possible to help us understand your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-2 rounded-full mr-3 flex-shrink-0">
                    <Clock size={20} className="text-company-blue-700" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Quick Response:</span> Our team will get back to you within 24 hours of your submission.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-2 rounded-full mr-3 flex-shrink-0">
                    <Shield size={20} className="text-company-blue-700" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Privacy Assured:</span> Your information is secure and will only be used to process your inquiry.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCheck size={20} className="text-company-blue-700" />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">No Obligation:</span> Receive a detailed quote and proposal without any commitment.
                  </p>
                </div>
              </div>
              
              {/* Services Quick Links */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-company-blue-800">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <FileText size={24} className="text-company-blue-700 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Online Exam Manpower</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <Code size={24} className="text-company-blue-700 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">IT & Technical Staff</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <Users size={24} className="text-company-blue-700 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">Non-Technical Staff</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enquiry Form */}
            <div className="animate-on-scroll">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Short */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Our Staffing Solutions"
            subtitle="Benefits that set our services apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-5">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">PAN India Presence</h3>
              <p className="text-gray-600">
                With operations in over 500 cities, we can deploy qualified staff wherever you need them, maintaining consistent quality standards nationwide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-5">
                <CheckCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Verified & Trained Staff</h3>
              <p className="text-gray-600">
                Every professional we provide undergoes thorough background checks, verification, and role-specific training to ensure they meet your requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <div className="bg-company-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center text-company-blue-600 mb-5">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">24/7 Coordination</h3>
              <p className="text-gray-600">
                Our responsive support team is available around the clock to address any concerns or requirements that arise during staff deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common inquiries about our staffing services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">How quickly can you deploy staff?</h3>
              <p className="text-gray-600">
                For standard requirements, we can deploy staff within 7-10 days. For urgent needs, we offer expedited services with deployment possible in as little as 48-72 hours, depending on location and volume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">What verification processes do you follow?</h3>
              <p className="text-gray-600">
                Our verification includes identity verification, address proof, educational credentials, employment history checks, and background verification. We also conduct role-specific skill assessments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">Do you provide staff for short-term projects?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible staffing solutions ranging from one-day assignments to long-term placements, based on your specific project requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">How do you handle staff replacements?</h3>
              <p className="text-gray-600">
                If any staff member fails to meet expectations, we provide prompt replacements. Our 24/7 coordination team ensures minimal disruption to your operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">What compliance measures do you maintain?</h3>
              <p className="text-gray-600">
                We adhere to all statutory regulations including EPF, ESIC, labor laws, and maintain comprehensive documentation to ensure complete legal compliance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll">
              <h3 className="text-lg font-bold mb-2 text-company-blue-800">Can you handle nationwide deployment simultaneously?</h3>
              <p className="text-gray-600">
                Yes, our extensive network allows us to deploy staff simultaneously across multiple locations nationwide while maintaining consistent quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-company-blue-800 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Alternative Ways to Reach Us"
            subtitle="Choose the method that works best for you"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center animate-on-scroll">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-5">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Call Us</h3>
              <p className="text-gray-200 mb-4">
                Speak directly with our staffing consultants
              </p>
              <p className="text-white font-medium">+91 98765 43210</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center animate-on-scroll">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-5">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Email Us</h3>
              <p className="text-gray-200 mb-4">
                Send your requirements in detail
              </p>
              <p className="text-white font-medium">enquiry@examstaffpro.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center animate-on-scroll">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-5">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Visit Us</h3>
              <p className="text-gray-200 mb-4">
                Meet our team in person
              </p>
              <p className="text-white font-medium">Head Office: Noida, UP</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
