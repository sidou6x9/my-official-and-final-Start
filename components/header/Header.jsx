"use client";
import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useDarkMode } from "../../context/DarkModeContext";
import Link from "next/link";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 mx-auto max-w-7xl rounded-3xl ${
        isDarkMode
          ? "bg-gray-800/90 backdrop-blur-md border border-gray-700"
          : "bg-white/90 backdrop-blur-md border border-gray-200"
      } shadow-lg transition-colors duration-300 z-50`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700/50"
                : "text-gray-700 hover:bg-gray-100/50"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Centered Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100/50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle - Right */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700/50"
                : "text-gray-700 hover:bg-gray-100/50"
            }`}
          >
            {isDarkMode ? (
              <FiSun className="w-6 h-6" />
            ) : (
              <FiMoon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden pb-4 ${
              isDarkMode ? "bg-gray-800/95" : "bg-white/95"
            } rounded-b-xl`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 mx-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gray-700/50"
                      : "text-gray-700 hover:bg-gray-100/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
