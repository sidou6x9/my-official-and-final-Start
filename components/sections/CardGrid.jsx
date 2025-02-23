"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardGrid = () => {
  const [selectedId, setSelectedId] = useState(null);

  const cards = [
    { id: 1, title: "Web Design", content: "Modern responsive websites" },
    { id: 2, title: "Development", content: "Full-stack solutions" },
    { id: 3, title: "Marketing", content: "SEO & campaigns" },
    { id: 4, title: "Support", content: "24/7 maintenance" },
  ];

  // Variants for the modal animation.
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section className="relative py-20 px-4 bg-gray-100">
      {/* Parent container made relative so the modal can cover it */}
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="group relative aspect-[3/2] sm-aspect-[2/3] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:z-10 cursor-pointer "
              whileHover={{
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedId(card)}
            >
              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-200">{card.content}</p>
              </div>

              {/* Demo Background */}
              <div className="absolute inset-0 bg-emerald-300 opacity-15" />
            </motion.div>
          ))}
        </div>

        {/* AnimatePresence allows the modal to animate on entry/exit */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-lg overflow-hidden z-20"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Modal Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedId.title}
                </h3>
                <p className="text-gray-200">{selectedId.content}</p>
              </div>

              {/* Modal Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-white bg-black/50 px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CardGrid;
