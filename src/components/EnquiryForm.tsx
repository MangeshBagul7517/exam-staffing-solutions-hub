
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  staffCount: string;
  startDate: string;
  message: string;
};

const EnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual emailjs implementation
      console.log("Enquiry submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Thank you! Your enquiry has been submitted successfully.");
      reset();
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company/Organization *
          </label>
          <input
            id="company"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
              errors.company ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your company name"
            {...register("company", { required: "Company name is required" })}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="your.email@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+91 98765 43210"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+\s()-]{10,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Required *
        </label>
        <select
          id="service"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
            errors.service ? "border-red-500" : "border-gray-300"
          }`}
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select a service</option>
          <option value="online_exam">Online Exam Manpower</option>
          <option value="it_technical">IT & Technical Staff</option>
          <option value="non_technical">Non-Technical Staff</option>
          <option value="other">Other (Please specify in message)</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location(s) Required *
          </label>
          <input
            id="location"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500 ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="City, State or PAN India"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="staffCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Staff Required
          </label>
          <input
            id="staffCount"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500"
            placeholder="Approximate number"
            {...register("staffCount")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
          Expected Start Date
        </label>
        <input
          id="startDate"
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500"
          {...register("startDate")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-company-blue-500 focus:border-company-blue-500"
          placeholder="Please provide any additional details about your requirements..."
          {...register("message")}
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto btn-primary ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
