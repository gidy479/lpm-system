import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiFileText, FiCheckCircle, FiBell, FiLogIn, FiLogOut } from "react-icons/fi";

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-red-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LPM</h1>
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            role="button"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 text-sm lg:text-base">
            {isLoggedIn && (
              <>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-200 hover:text-black transition-colors"
                  aria-current={window.location.pathname === "/dashboard" ? "true" : undefined}
                >
                  <FiHome className="mr-2" /> Dashboard
                </Link>
                <Link
                  to="/submit"
                  className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-200 hover:text-black transition-colors"
                  aria-current={window.location.pathname === "/submit" ? "true" : undefined}
                >
                  <FiFileText className="mr-2" /> Submit
                </Link>
                <Link
                  to="/approvals"
                  className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-200 hover:text-black transition-colors"
                  aria-current={window.location.pathname === "/approvals" ? "true" : undefined}
                >
                  <FiCheckCircle className="mr-2" /> Approvals
                </Link>
                <Link
                  to="/notifications"
                  className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-200 hover:text-black transition-colors"
                  aria-current={window.location.pathname === "/notifications" ? "true" : undefined}
                >
                  <FiBell className="mr-2" /> Notifications
                </Link>
              </>
            )}
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="inline-flex items-center bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors"
              >
                <FiLogOut className="mr-2" /> Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors"
                aria-current={window.location.pathname === "/login" ? "true" : undefined}
              >
                <FiLogIn className="mr-2" /> Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-3">
            {isLoggedIn && (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center text-white hover:text-red-600 hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                  onClick={toggleMobileMenu}
                  aria-current={window.location.pathname === "/dashboard" ? "true" : undefined}
                >
                  <FiHome className="mr-3" /> Dashboard
                </Link>
                <Link
                  to="/submit"
                  className="flex items-center text-white hover:text-red-600 hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                  onClick={toggleMobileMenu}
                  aria-current={window.location.pathname === "/submit" ? "true" : undefined}
                >
                  <FiFileText className="mr-3" /> Submit LPM
                </Link>
                <Link
                  to="/approvals"
                  className="flex items-center text-white hover:text-red-600 hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                  onClick={toggleMobileMenu}
                  aria-current={window.location.pathname === "/approvals" ? "true" : undefined}
                >
                  <FiCheckCircle className="mr-3" /> Approvals
                </Link>
                <Link
                  to="/notifications"
                  className="flex items-center text-white hover:text-red-600 hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                  onClick={toggleMobileMenu}
                  aria-current={window.location.pathname === "/notifications" ? "true" : undefined}
                >
                  <FiBell className="mr-3" /> Notifications
                </Link>
              </>
            )}
            <div className="pt-4 border-t border-gray-700">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout();
                    toggleMobileMenu();
                  }}
                  className="flex items-center w-full text-red-600 hover:bg-red-800 hover:text-white px-3 py-2 rounded transition-colors"
                >
                  <FiLogOut className="mr-3" /> Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center text-red-600 hover:bg-red-800 hover:text-white px-3 py-2 rounded transition-colors"
                  onClick={toggleMobileMenu}
                  aria-current={window.location.pathname === "/login" ? "true" : undefined}
                >
                  <FiLogIn className="mr-3" /> Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}