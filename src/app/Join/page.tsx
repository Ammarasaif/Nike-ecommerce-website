"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Join = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    country: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full sm:w-[380px] mx-auto bg-white p-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold">BECOME A NIKE MEMBER</h2>
          <p className="text-sm text-gray-500">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <p className="text-sm text-gray-500">
          Get a Nike Member Reward every year on your Birthday.
          </p>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className={`w-1/2 p-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded-md ${
                formData.gender === "male" ? "bg-black text-black" : "bg-white text-black"
              }`}
              onClick={() => setFormData({ ...formData, gender: "male" })}
            >
              Male
            </button>
            <button
              type="button"
              className={`w-1/2 p-2 bg-white text-black hover:bg-black hover:text-white  border-black  border rounded-md ${
                formData.gender === "female" ? "bg-black text-black" : "bg-white text-black"
              }`}
              onClick={() => setFormData({ ...formData, gender: "female" })}
            >
              Female
            </button>
          
          </div>
          <p className="text-sm text-gray-500">
              
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
           </p>
          

           <p className="text-sm text-gray-500">
              
           By creating an account, you agree to Nike's Privacy Policy and Terms of Use.
           </p>
          <button
            type="submit"
            className="w-full py-2 bg-white text-black hover:bg-black hover:text-white border border-black rounded-md"
          >
            JOIN US
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
        Already a Member?<a className="font-medium"> Sign In.</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Join;