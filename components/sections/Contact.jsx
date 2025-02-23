"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  // Formspree endpoint (replace with your Formspree ID)
  const FORMSPREE_URL = "https://formspree.io/f/your-form-id";

  return (
    <main
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl sm:text-5xl font-black mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Forge Your
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              {" "}
              Championship Path
            </span>
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Reach out for training inquiries, partnership opportunities, or
            media requests. Our team typically responds within 24 hours.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <form action={FORMSPREE_URL} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                      : "bg-white border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                  } transition-all duration-300`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                      : "bg-white border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                  } transition-all duration-300`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                      : "bg-white border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50"
                  } transition-all duration-300`}
                ></textarea>
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-lg
                         hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiSend className="text-xl" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div
              className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Direct Channels
              </h2>

              <div className="space-y-6">
                <ContactCard
                  icon={<FiMapPin className="text-[#D4AF37] text-2xl" />}
                  title="Headquarters"
                  content="123 Championship Lane, Las Vegas, NV 89101"
                  isDarkMode={isDarkMode}
                />

                <ContactCard
                  icon={<FiMail className="text-[#D4AF37] text-2xl" />}
                  title="Email"
                  content="contact@eliteboxing.com"
                  isDarkMode={isDarkMode}
                  link="mailto:contact@eliteboxing.com"
                />

                <ContactCard
                  icon={<FiPhone className="text-[#D4AF37] text-2xl" />}
                  title="Phone"
                  content="(555) 123-4567"
                  isDarkMode={isDarkMode}
                  link="tel:5551234567"
                />
              </div>
            </div>

            {/* Social Media */}
            <div
              className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Connect With Us
              </h2>

              <div className="flex gap-6 justify-center">
                <SocialIcon
                  icon={<FaTwitter />}
                  link="#"
                  isDarkMode={isDarkMode}
                />
                <SocialIcon
                  icon={<FaInstagram />}
                  link="#"
                  isDarkMode={isDarkMode}
                />
                <SocialIcon
                  icon={<FaLinkedin />}
                  link="#"
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>

            {/* Credibility Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <FiCheckCircle className="text-[#D4AF37] text-xl" />
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  IBF Certified
                </span>
              </div>
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <FiCheckCircle className="text-[#D4AF37] text-xl" />
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  24/7 Support
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Location Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/20"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.745434713705!2d-115.1728656847313!3d36.12523698009119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c391478c4c3d%3A0xe3a23a15f7d834ca!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2suk!4v1629996541562!5m2!1sen!2suk"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
};

// Reusable Contact Card Component
const ContactCard = ({ icon, title, content, link, isDarkMode }) => (
  <div
    className={`flex items-start gap-4 p-4 rounded-xl transition-all ${
      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
    }`}
  >
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3
        className={`font-semibold ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {title}
      </h3>
      {link ? (
        <a
          href={link}
          className={`text-sm ${
            isDarkMode
              ? "text-gray-400 hover:text-[#D4AF37]"
              : "text-gray-600 hover:text-[#B8860B]"
          } transition-colors`}
        >
          {content}
        </a>
      ) : (
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {content}
        </p>
      )}
    </div>
  </div>
);

// Reusable Social Icon Component
const SocialIcon = ({ icon, link, isDarkMode }) => (
  <a
    href={link}
    className={`p-3 rounded-full text-2xl transition-all ${
      isDarkMode
        ? "text-gray-400 hover:text-[#D4AF37] hover:bg-gray-700"
        : "text-gray-600 hover:text-[#B8860B] hover:bg-gray-200"
    }`}
  >
    {icon}
  </a>
);

export default Contact;
