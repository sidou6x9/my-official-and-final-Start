"use client";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const USPCards = () => {
  const { isDarkMode } = useDarkMode();
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  return (
    <section
      className={`relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } py-16 md:py-24`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full blur-xl md:blur-3xl -top-16 -right-16 md:-top-32 md:-right-32 ${
            isDarkMode ? "bg-purple-500/30" : "bg-blue-300/50"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Us
            <span className="text-red-500 ml-2">Over Competitors</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pixel-Perfect Animations Card */}
          <motion.div
            className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
            whileHover={{ y: -10 }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 text-white flex items-center justify-center text-xl">
                🎮
              </div>
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Pixel-Perfect Animations
            </h3>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              60 FPS Motion Design Powered by Framer & GSAP
            </p>

            {/* Animation Demo */}
            <div className="relative h-32 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 bg-blue-600 dark:bg-purple-500 rounded-full"
                animate={{ y: [0, -80, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="absolute bottom-0 w-full h-4 bg-gradient-to-t from-white/30 dark:from-gray-800/30" />
            </div>
          </motion.div>

          {/* Dark Mode Specialists Card */}
          <motion.div
            className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
            whileHover={{ y: -10 }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 text-white flex items-center justify-center text-xl">
                🌓
              </div>
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dark Mode Specialists
            </h3>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Auto-Adapting Themes That Delight Users
            </p>

            {/* Dark Mode Preview */}
            <div
              className={`relative h-32 rounded-xl overflow-hidden p-4 ${
                localDarkMode ? "bg-gray-900" : "bg-white"
              } border ${
                localDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500"></div>
                </div>
                <button
                  onClick={() => setLocalDarkMode(!localDarkMode)}
                  className="p-1 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  {localDarkMode ? "🌞" : "🌙"}
                </button>
              </div>
              <div
                className={`h-1 w-full ${
                  localDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              ></div>
            </div>
          </motion.div>

          {/* Mobile-First Architecture Card */}
          <motion.div
            className={`p-6 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl`}
            whileHover={{ y: -10 }}
          >
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-purple-500 text-white flex items-center justify-center text-xl">
                📱
              </div>
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Mobile-First Architecture
            </h3>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Google Core Vitals Guarantee
            </p>

            {/* Mobile Mockup */}
            <div className="relative h-32 rounded-xl bg-gray-900 p-2">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {/* Mobile Screen Content */}
                <div className="h-full bg-gray-800 p-2">
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <div className="w-full max-w-[120px] bg-green-600 text-white px-2 py-1 rounded text-sm text-center">
                      Lighthouse 100
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                        100
                      </div>
                      <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                        100
                      </div>
                      <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                        100
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile Frame */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-xl border-2 border-gray-700 pointer-events-none" />
              </div>
            </div>
          </motion.div>
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
    </section>
  );
};

export default USPCards;
