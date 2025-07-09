import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiCheckCircle, FiXCircle, FiInfo, FiRefreshCcw } from "react-icons/fi";

// Dummy notifications data
const mockNotifications = [
  {
    id: 1,
    type: "approved",
    message: "LPM for Coca-Cola has been approved and is ready for broadcast.",
    time: "2025-07-07 09:00 AM",
  },
  {
    id: 2,
    type: "rejected",
    message: "LPM for MTN was rejected. Please revise and resubmit.",
    time: "2025-07-06 04:15 PM",
  },
  {
    id: 3,
    type: "feedback",
    message: "LPM for Vodafone was sent back with feedback.",
    time: "2025-07-05 11:30 AM",
  },
];

export default function Notifications() {
  const [notifications] = useState(mockNotifications);

  const getIcon = (type) => {
    switch (type) {
      case "approved":
        return <FiCheckCircle className="text-green-500" />;
      case "rejected":
        return <FiXCircle className="text-red-500" />;
      case "feedback":
        return <FiRefreshCcw className="text-yellow-400" />;
      default:
        return <FiInfo className="text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={true} onLogout={() => {}} />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="flex items-start gap-4 bg-gray-900 p-4 rounded-xl shadow hover:bg-gray-800 transition"
            >
              <div className="text-2xl">{getIcon(note.type)}</div>
              <div>
                <p className="text-white">{note.message}</p>
                <p className="text-gray-400 text-sm mt-1">{note.time}</p>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <p className="text-gray-400 text-center">No new notifications at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
