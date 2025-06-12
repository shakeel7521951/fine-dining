import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { ImMail4 } from "react-icons/im";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    alert("Form submitted!");
  };

  const contactDetails = [
    {
      icon: <FaLocationDot className="text-amber-500 text-3xl" />,
      title: "Address",
      text: "58 Ralph Ave New York,1111",
    },
    {
      icon: <IoCall className="text-amber-500 text-3xl" />,
      title: "Call Us",
      text: "+1 800 000 111",
    },
    {
      icon: <ImMail4 className="text-amber-500 text-3xl" />,
      title: "Email Us",
      text: "  contact@example.com",
    },
    {
      icon: <FaClock className="text-amber-500 text-3xl" />,
      title: "Open Hours",
      text: "LUNCH: 12am to 2pm DINNER: 6pm-10pm",
    },
  ];

  return (
    
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        <span className="text-amber-500"> MAKE RESERVATIONS:</span></h1>
        <h1 className="text-3xl font-bold text-center mb-8">
      For private Dinners &  private Events 

      </h1>
        <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/private-dinner.jpg')", // replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-2">
          — Now Booking —
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light">
          Private Dinners & Happy Hours
        </h2>
      </div>
    </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {contactDetails?.map((item, index) => (
          <div key={index} className="bg-white border border-blue-200 shadow-lg p-4 rounded-lg text-center">
            <div>{item.icon}</div>
            <h4 className="text-gray-700 font-semibold mt-4">{item.title}</h4>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">
        Get In <span className="text-amber-500">Touch</span>
      </h1>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h4 className="text-center text-xl font-semibold mb-4">Contact Us</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="h-4 w-4 text-amber-500 border-gray-300"
            />
            <label className="text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Book your Table Now
          </button>
        </form>
      </div>

      <h1 className="text-3xl font-bold text-center my-8">
        Find Us On The <span className="text-amber-500">Google Map</span>
      </h1>

      <div className="max-w-4xl mx-auto mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449679207!2d71.60760928829154!3d29.377064566863567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738256125117!5m2!1sen!2s"
          width="100%"
          height="450"
          className="rounded border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
