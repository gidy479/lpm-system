import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const navigate = useNavigate()
  const { isLoggedIn, login, logout } = useAuthStore()

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const signupForm = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  const onLoginSubmit = (data) => {
    console.log("Login data:", data);
    // Handle login logic here
    login();
    setShowLoginForm(false);
    loginForm.reset();
    navigate('/dashboard')
  };

  const onSignupSubmit = (data) => {
    console.log("Signup data:", data);
    // Handle signup logic here
    login()
    setShowSignupForm(false);
    signupForm.reset();
    navigate('/dashboard')
  };

  const closeAllModals = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
    loginForm.reset();
    signupForm.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />

      <main className="p-8 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to the Live Presenter Mention System
        </motion.h2>
        <motion.p
          className="text-lg max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Submit your LPMs, track their approvals, and get notified in real-time.
        </motion.p>
          <div className="space-x-4">
            <button
              onClick={() => setShowLoginForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition duration-300 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignupForm(true)}
              className="bg-transparent border-2 border-red-600 hover:bg-red-600 text-white px-6 py-3 rounded transition duration-300 cursor-pointer "
            >
              Sign Up
            </button>
          </div>        
      </main>

      {/* Login Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Login</h3>
              <button
                onClick={closeAllModals}
                className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer "
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  {...loginForm.register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    {...loginForm.register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showLoginPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.password.message}</p>
                )}
              </div>

              <div className="text-right">
                <a href="#" className="text-red-600 hover:text-red-700 text-sm">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setShowLoginForm(false);
                    setShowSignupForm(true);
                  }}
                  className="text-red-600 hover:text-red-700 font-medium cursor-pointer "
                >
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Sign Up</h3>
              <button
                onClick={closeAllModals}
                className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer "
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  {...signupForm.register("username", { 
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your username"
                />
                {signupForm.formState.errors.username && (
                  <p className="text-red-500 text-sm mt-1">{signupForm.formState.errors.username.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  {...signupForm.register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
                {signupForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{signupForm.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    {...signupForm.register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showSignupPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {signupForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{signupForm.formState.errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300 cursor-pointer "
              >
                Create Account
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setShowSignupForm(false);
                    setShowLoginForm(true);
                  }}
                  className="text-red-600 hover:text-red-700 font-medium cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}