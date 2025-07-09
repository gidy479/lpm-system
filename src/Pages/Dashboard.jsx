import React from "react";
import { FiFileText, FiCheckCircle, FiBell, FiUser, FiClock, FiList } from "react-icons/fi";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  // Mocked data – in real use, you'd fetch this from backend API
  const stats = {
    totalLPMs: 124,
    pendingApprovals: 18,
    approvedLPMs: 90,
    notifications: 6,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={true} onLogout={() => {}} />
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-800 transition duration-300">
            <div className="flex items-center space-x-4">
              <FiList className="text-red-500 text-3xl" />
              <div>
                <p className="text-lg font-semibold">Total LPMs Submitted</p>
                <p className="text-2xl font-bold text-white">{stats.totalLPMs}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-800 transition duration-300">
            <div className="flex items-center space-x-4">
              <FiClock className="text-red-500 text-3xl" />
              <div>
                <p className="text-lg font-semibold">Pending Approvals</p>
                <p className="text-2xl font-bold text-white">{stats.pendingApprovals}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-800 transition duration-300">
            <div className="flex items-center space-x-4">
              <FiCheckCircle className="text-red-500 text-3xl" />
              <div>
                <p className="text-lg font-semibold">Approved LPMs</p>
                <p className="text-2xl font-bold text-white">{stats.approvedLPMs}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-800 transition duration-300">
            <div className="flex items-center space-x-4">
              <FiBell className="text-red-500 text-3xl" />
              <div>
                <p className="text-lg font-semibold">New Notifications</p>
                <p className="text-2xl font-bold text-white">{stats.notifications}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:bg-gray-800 transition duration-300">
            <div className="flex items-center space-x-4">
              <FiUser className="text-red-500 text-3xl" />
              <div>
                <p className="text-lg font-semibold">Your Profile</p>
                <p className="text-gray-400">View and edit user info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}