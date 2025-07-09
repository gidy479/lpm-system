import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function SubmitLPM() {
  const [formData, setFormData] = useState({
    advertiser: "",
    program: "",
    datetime: "",
    script: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // You can send the formData to the backend here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={true} onLogout={() => {}} />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Submit LPM</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Advertiser Name</label>
            <input
              type="text"
              name="advertiser"
              value={formData.advertiser}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-2">Program / Show Name</label>
            <input
              type="text"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-2">Date and Time</label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-2">Exact Words to be Said</label>
            <textarea
              name="script"
              value={formData.script}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition duration-300"
          >
            Submit LPM
          </button>
        </form>
      </div>
    </div>
  );
}