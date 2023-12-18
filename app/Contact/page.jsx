"use client"

import React, { useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

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
    <div>
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    <Navbar />
    </>
  );
};

export default ContactForm;
