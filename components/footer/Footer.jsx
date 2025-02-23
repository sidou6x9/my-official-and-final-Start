"use client";
import { useDarkMode } from "../../context/DarkModeContext";
import { FiMail, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  const footerLinks = [
    { title: "Company", links: ["About", "Careers", "Contact"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security"] },
    { title: "Resources", links: ["Blog", "Docs", "Help"] },
  ];

  return (
    <footer className={`relative ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      {/* Gradient Overlay */}

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              Bistro
            </h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Crafting culinary excellence since 2020
            </p>
            <div className="flex gap-4 mt-6">
              <FiFacebook
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-[#D4AF37]"
                    : "text-gray-600 hover:text-[#B8860B]"
                }`}
              />
              <FiTwitter
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-[#D4AF37]"
                    : "text-gray-600 hover:text-[#B8860B]"
                }`}
              />
              <FiInstagram
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-[#D4AF37]"
                    : "text-gray-600 hover:text-[#B8860B]"
                }`}
              />
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3
                className={`font-semibold mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-[#D4AF37]"
                          : "text-gray-600 hover:text-[#B8860B]"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t ${
            isDarkMode
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          } text-center`}
        >
          © {new Date().getFullYear()} Bistro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
