"use client";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const ProcessBreakdown = () => {
  const { isDarkMode } = useDarkMode();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Audit",
      icon: "🔍",
      description: "Free website health check & strategy session",
      stats: "87% Conversion Lift Avg.",
    },
    {
      title: "Design",
      icon: "🎨",
      description: "Figma prototypes & mobile-first wireframes",
      stats: "2-3 Days Per Revision",
    },
    {
      title: "Build",
      icon: "⚡",
      description: "React/Tailwind development with animations",
      stats: "<1s Load Time Guarantee",
    },
    {
      title: "Launch",
      icon: "🚀",
      description: "Hosting setup & SEO optimization",
      stats: "100% Google Core Vitals",
    },
  ];

  return (
    <section
      className={`relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } py-16 md:py-24`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full blur-xl md:blur-3xl -bottom-16 -left-16 md:-bottom-32 md:-left-32 ${
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
            Pain-Free Process,
            <span className="text-red-500 ml-2">Proven Results</span>
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Transparent workflow from concept to conversion-optimized launch
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 right-4 top-1/2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full hidden md:block">
            <motion.div
              className="absolute h-full bg-blue-600 dark:bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                onHoverStart={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Indicator */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                      isDarkMode
                        ? "bg-purple-500 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Content Card */}
                {/* Content Card */}
                <motion.div
                  className={`p-6 rounded-2xl shadow-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                  animate={{
                    y: activeStep === index ? -10 : 0,
                    borderColor:
                      activeStep === index
                        ? isDarkMode
                          ? "rgba(147, 51, 234, 1)" // Purple-600 in RGB
                          : "rgba(37, 99, 235, 1)" // Blue-600 in RGB
                        : "rgba(0, 0, 0, 0)", // Transparent in RGBA
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    borderWidth: "2px",
                    borderColor: "rgba(0, 0, 0, 0)", // Initial transparent border
                  }}
                >
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {step.description}
                  </p>
                  <div
                    className={`mt-4 px-3 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode
                        ? "bg-gray-700 text-purple-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {step.stats}
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute -top-4 left-6 w-3 h-3 bg-blue-600 dark:bg-purple-500 rounded-full hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Timeline Note */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-purple-400"
                  : "bg-white text-blue-600 shadow-md"
              }`}
            >
              <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              Transparent Timeline: 2-4 Weeks Average
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${
              isDarkMode
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-colors`}
          >
            Start with Free Audit
            <motion.span
              animate={{ x: [-4, 8, -4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </button>
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
    </section>
  );
};

export default ProcessBreakdown;
