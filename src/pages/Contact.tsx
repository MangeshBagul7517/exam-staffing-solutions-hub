
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-company-blue-900 to-company-blue-700 pt-36 pb-20 md:pt-40 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527576539890-dfa815648363')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              We're here to help with all your manpower requirements
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <SectionHeading
                title="Get in Touch"
                subtitle="Our team is ready to assist you with any inquiries"
                centered={false}
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-company-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-company-blue-800">Head Office</h3>
                    <p className="text-gray-700">
                      123 Corporate Park, Sector 58<br />
                      Noida, Uttar Pradesh 201301<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-company-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-company-blue-800">Phone</h3>
                    <p className="text-gray-700">
                      Main: +91 98765 43210<br />
                      Support: +91 98765 43211<br />
                      HR: +91 98765 43212
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-company-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-company-blue-800">Email</h3>
                    <p className="text-gray-700">
                      General Inquiries: info@examstaffpro.com<br />
                      Client Support: support@examstaffpro.com<br />
                      Business Development: sales@examstaffpro.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-company-blue-50 p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-company-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-company-blue-800">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-company-blue-700 font-medium">Support: 24/7 for active clients</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-company-blue-800">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-company-blue-50 p-3 rounded-full text-gray-600 hover:text-company-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-company-blue-50 p-3 rounded-full text-gray-600 hover:text-company-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-company-blue-50 p-3 rounded-full text-gray-600 hover:text-company-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-company-blue-50 p-3 rounded-full text-gray-600 hover:text-company-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-company-blue-800">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Regional Offices"
            subtitle="Serving clients across India with local presence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Mumbai Office</h3>
              <p className="text-gray-700 mb-4">
                402, Seaview Tower<br />
                Juhu Beach Road, Juhu<br />
                Mumbai - 400049<br />
                Maharashtra
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 22 1234 5678<br />
                <span className="font-medium">Email:</span> mumbai@examstaffpro.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Bangalore Office</h3>
              <p className="text-gray-700 mb-4">
                201, Tech Park<br />
                Whitefield Main Road<br />
                Bangalore - 560066<br />
                Karnataka
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 80 1234 5678<br />
                <span className="font-medium">Email:</span> bangalore@examstaffpro.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Hyderabad Office</h3>
              <p className="text-gray-700 mb-4">
                304, Cyber Towers<br />
                Hitec City, Madhapur<br />
                Hyderabad - 500081<br />
                Telangana
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 40 1234 5678<br />
                <span className="font-medium">Email:</span> hyderabad@examstaffpro.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-on-scroll card-hover">
              <h3 className="text-xl font-bold mb-3 text-company-blue-800">Chennai Office</h3>
              <p className="text-gray-700 mb-4">
                505, Marina Towers<br />
                Anna Salai, Teynampet<br />
                Chennai - 600018<br />
                Tamil Nadu
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +91 44 1234 5678<br />
                <span className="font-medium">Email:</span> chennai@examstaffpro.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Find Us"
            subtitle="Our head office location"
          />
          
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md border border-gray-200 animate-on-scroll">
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                Google Map Embed Here<br />
                <span className="text-sm">(Google Maps iframe would be placed here in production)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-company-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Staffing Solutions?</h2>
              <p className="text-xl text-gray-200 mb-8">
                For urgent requirements or detailed quotes, use our quick inquiry form to get expedited assistance from our team.
              </p>
              <Link to="/enquiry" className="btn-primary bg-white text-company-blue-700 hover:bg-gray-100">
                Quick Inquiry Form
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-white">Urgent Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-company-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Emergency Helpline</p>
                    <p className="text-gray-200">+91 98765 43219</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-company-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Urgent Inquiries</p>
                    <p className="text-gray-200">urgent@examstaffpro.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-company-blue-300 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">24/7 Support</p>
                    <p className="text-gray-200">For active clients only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
