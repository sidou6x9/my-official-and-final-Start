"use client";
import { useDarkMode } from "../../context/DarkModeContext";
import { motion } from "framer-motion";

import { useState } from "react";

const PortfolioTeaser = () => {
  const { isDarkMode } = useDarkMode();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Boxing Gym Pro",
      category: "Fitness Transformation",
      image: "/ippo.jpg",
      stats: {
        leads: "+214% New Members",
        speed: "0.8s Load Time",
        revenue: "$38k Monthly Revenue",
      },
    },
    {
      id: 2,
      title: "Urban Eats",
      category: "Restaurant System",
      image: "/restaurant.jpg",
      stats: {
        leads: "1,200+ Orders/Month",
        speed: "1.1s Load Time",
        revenue: "$28k Monthly Sales",
      },
    },
    {
      id: 3,
      title: "FitFlow App",
      category: "Fitness Mobile App",
      image: "/fitness.jpg",
      stats: {
        leads: "500+ Active Users",
        speed: "0.9s Load Time",
        revenue: "$12k MRR",
      },
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
            Recent Results That
            <span className="text-red-500 ml-2">Convert</span>
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            See how we've transformed local businesses with modern web solutions
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden shadow-xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
            >
              {/* Image Container */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Stats Overlay */}
                <motion.div
                  className={`absolute inset-0 p-4 flex flex-col justify-end ${
                    isDarkMode ? "bg-gray-900/90" : "bg-white/90"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                >
                  <div className="space-y-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                          isDarkMode
                            ? "bg-gray-800 text-purple-400"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <span className="text-sm">{key}:</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6">
                <h3
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a
            href="/portfolio"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${
              isDarkMode
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-colors`}
          >
            See Full Case Studies
            <motion.span
              animate={{ x: [-4, 8, -4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
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

export default PortfolioTeaser;
