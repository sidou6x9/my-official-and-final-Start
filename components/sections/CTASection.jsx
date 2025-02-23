"use client";
import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const CTASection = () => {
  const { isDarkMode } = useDarkMode();
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      className={`relative ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } py-24 overflow-hidden`}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[3%] bg-[length:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.25 },
            },
          }}
        >
          {/* Section Heading */}
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Ready to
            <span className="text-blue-600 mx-2">Modernize</span>
            Your Website?
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            className={`text-lg mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Get a high-conversion website in 14 days or less -
            <span className="block md:inline">
              {" "}
              backed by our performance guarantee
            </span>
          </motion.p>

          {/* CTA Buttons Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-6 rounded-xl text-left transition-all ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() =>
                window.open("https://calendly.com/your-link", "_blank")
              }
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode ? "bg-blue-600/20" : "bg-blue-50"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Free Strategy Session
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    15-minute consultation
                  </div>
                </div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-6 rounded-xl text-left transition-all ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() =>
                window.open("https://pagespeed.web.dev/", "_blank")
              }
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode ? "bg-purple-600/20" : "bg-purple-50"
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Instant Speed Test
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Check your current score
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            className="flex flex-col items-center gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <div
              className={`flex items-center gap-4 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>30-day performance guarantee</span>
              <div className="w-px h-4 bg-gray-400" />
              <span>GDPR compliant</span>
              <div className="w-px h-4 bg-gray-400" />
              <span>No upfront payment</span>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 opacity-70">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-12 w-full rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ scaleX: 0 }}
        animate={controls}
        variants={{
          visible: {
            scaleX: 1,
            transition: { duration: 1.5, ease: "circOut" },
          },
        }}
      />
    </section>
  );
};

export default CTASection;
