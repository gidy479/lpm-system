import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiCheck, FiX, FiArrowLeftCircle } from "react-icons/fi";

// Dummy data to simulate fetched LPMs
const mockLPMs = [
  {
    id: 1,
    advertiser: "Coca-Cola",
    program: "Morning Buzz",
    datetime: "2025-07-08T08:00",
    script: "Refresh your morning with Coca-Cola.",
    status: "pending",
  },
  {
    id: 2,
    advertiser: "MTN",
    program: "Lunch Drive",
    datetime: "2025-07-08T13:00",
    script: "Everywhere you go with MTN.",
    status: "pending",
  },
];

export default function Approvals() {
  const [lpms, setLpms] = useState(mockLPMs);

  const handleAction = (id, action) => {
    const updated = lpms.map((item) =>
      item.id === id ? { ...item, status: action } : item
    );
    setLpms(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={true} onLogout={() => {}} />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-6">LPM Approvals</h2>
        <div className="space-y-6">
          {lpms.map((lpm) => (
            <div
              key={lpm.id}
              className="bg-gray-900 rounded-xl p-5 shadow-md hover:bg-gray-800 transition duration-300"
            >
              <div className="mb-2">
                <p className="text-xl font-semibold text-red-400">{lpm.advertiser}</p>
                <p className="text-gray-400">Program: {lpm.program}</p>
                <p className="text-gray-400">
                  Scheduled: {new Date(lpm.datetime).toLocaleString()}
                </p>
              </div>
              <p className="my-4 text-white italic border-l-4 border-red-500 pl-4">
                "{lpm.script}"
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleAction(lpm.id, "approved")}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  <FiCheck /> Approve
                </button>
                <button
                  onClick={() => handleAction(lpm.id, "rejected")}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  <FiX /> Reject
                </button>
                <button
                  onClick={() => handleAction(lpm.id, "feedback")}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
                >
                  <FiArrowLeftCircle /> Send Back with Feedback
                </button>
              </div>
              {lpm.status !== "pending" && (
                <p className="mt-4 text-sm text-gray-400">
                  Status: <span className="text-red-300">{lpm.status.toUpperCase()}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}