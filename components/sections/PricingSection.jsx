"use client";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const PricingSection = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedPlan, setSelectedPlan] = useState(1);

  const packages = [
    {
      title: "Basic",
      price: "$1,200",
      features: [
        "3-page static site",
        "Mobile-responsive design",
        "Contact form integration",
        "Basic SEO setup",
        "1-week turnaround",
      ],
      cta: "Start Basic Project",
      popular: false,
    },
    {
      title: "Standard",
      price: "$2,500",
      features: [
        "5-page animated site",
        "CMS blog integration",
        "Advanced SEO setup",
        "Social media integration",
        "2-week development",
        "3 design revisions",
      ],
      cta: "Choose Standard",
      popular: true,
    },
    {
      title: "Premium",
      price: "$4,000+",
      features: [
        "Full web application",
        "User authentication",
        "Database integration",
        "E-commerce functionality",
        "Custom API endpoints",
        "Priority support",
        "Ongoing maintenance",
      ],
      cta: "Get Custom Quote",
      popular: false,
    },
  ];

  return (
    <section
      className={`relative ${
        isDarkMode ? "bg-gray-900" : "bg-blue-50"
      } py-16 md:py-24`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ x: [-100, 0, 100], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className={`absolute w-[300px] h-[300px] rounded-full blur-3xl ${
            isDarkMode ? "bg-purple-500/20" : "bg-blue-300/30"
          }`}
        />
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
            Transparent Pricing,
            <span className="text-red-500 ml-2">Zero Surprises</span>
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            All-inclusive packages with 30-day money-back guarantee
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`h-full p-8 rounded-2xl shadow-xl transition-all ${
                  isDarkMode
                    ? "bg-gray-800 border border-gray-700 hover:border-purple-500"
                    : "bg-white border border-gray-200 hover:border-blue-500"
                } ${selectedPlan === index ? "scale-[1.02]" : ""}`}
                onMouseEnter={() => setSelectedPlan(index)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                        isDarkMode
                          ? "bg-purple-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      Most Popular
                    </div>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.title}
                </h3>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      isDarkMode ? "text-purple-400" : "text-blue-600"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {index !== 2 && (
                    <span className="text-gray-500 ml-2">one-time</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? isDarkMode
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                      : isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {pkg.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <div
            className={`inline-block px-6 py-3 rounded-lg ${
              isDarkMode
                ? "bg-gray-800 text-purple-400"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <span className="mr-2">Need enterprise solutions?</span>
            <button className="font-semibold hover:underline">
              Schedule Consultation →
            </button>
          </div>
        </motion.div>

        {/* Mobile Sticky CTA */}
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

export default PricingSection;
