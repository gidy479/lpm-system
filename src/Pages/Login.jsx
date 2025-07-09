import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiUser } from "react-icons/fi";
import Navbar from "../components/Navbar";

export default function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    if (credentials.username === "admin" && credentials.password === "password") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={false} />
      <div className="flex items-center justify-center p-6">
        <div className="bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Login</h2>
          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <FiUser className="absolute top-3 left-3 text-red-400" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <div className="relative">
              <FiLock className="absolute top-3 left-3 text-red-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded bg-gray-800 border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
