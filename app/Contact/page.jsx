"use client"

import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import '../../app/globals.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace the URL with your own backend endpoint for handling form submissions
      const response = await axios.post("/api/contact", formData);
      console.log("Form submitted successfully:", response.data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors or show an error message to the user
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center top-10 justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white p-6 rounded-lg shadow-md"
        >
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md border-gray-300 resize-none bg-gray-100"
              rows="4"
            />
          </label>
          <button
            type="submit"
            className="bg-gray-300 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          > 
            Submit
          </button>
        </form>
      </div>
      <Navbar />
    </>
  );
};

export default ContactForm;
