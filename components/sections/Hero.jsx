"use client";
import Image from "next/image";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CardStack } from "../cards/CardStack";

const Hero = () => {
  const { isDarkMode } = useDarkMode();
  const [leadsToday, setLeadsToday] = useState(1273);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadsToday((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } pt-40 pb-20 md:pt-28`} // Fixed pt-50 to pt-20
    >
      {/* Bottom Gradient Overlay */}

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4 md:mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="block text-red-500 mb-2">
                Stop Losing Customers
              </span>
              To Outdated Websites
            </motion.h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl  ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Mobile-friendly websites that convert visitors into customers -
            </p>
            <p
              className={`text-lg md:text-xl mb-6 ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {" "}
              <span className="block md:inline">
                {" "}
                starting at $1,200 for local businesses
              </span>
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button className="relative overflow-hidden group bg-blue-600 text-white px-6 py-4 rounded-lg text-sm md:text-base font-semibold shadow-lg hover:bg-blue-700 transition-colors">
                Get Free Website Audit →
              </button>

              <button className="flex items-center gap-2 px-6 py-4 rounded-lg border bg-white/80 text-gray-900 text-sm md:text-base font-semibold">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                See Case Studies
              </button>
            </motion.div>

            {/* Social Proof */}
            <div className="mt-8 md:mt-12">
              <div className="flex flex-col gap-2 text-sm md:text-base">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
                    +214% Gym Memberships
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md">
                    37 New Dental Patients
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                    $28k Restaurant Orders
                  </span>
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-md">
                    3X Faster Bookings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Optimized Preview */}
          <div className="order-1 lg:order-2 w-full mt-10 max-w-lg mx-auto lg:max-w-none">
            <div className="aspect-video relative">
              <CardStack
                items={[
                  {
                    id: 1,
                    image: "/fitness.jpg",
                    blurDataURL:
                      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoKAAgAAgA0JZgAD5AKD4AQABMBOgAA/AA/vv7+/gAA", // Add real blur data
                    alt: "Fitness website example",
                  },
                  {
                    id: 2,
                    image: "/ippo.jpg",
                    blurDataURL: "...",
                    alt: "Boxing website example",
                  },
                  {
                    id: 3,
                    image: "/restaurant.jpg",
                    blurDataURL: "...",
                    alt: "Restaurant website example",
                  },
                ]}
                offset={15}
                scaleFactor={0.08}
              />
            </div>

            {/* Phone Number - Mobile Bottom Sticky */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black text-white p-3 text-center z-50">
              <div className="flex items-center justify-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25.301 6.172 4.291 10.16C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
                </svg>
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
