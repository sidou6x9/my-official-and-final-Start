// components/cards/CardStack.jsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval;

export const CardStack = ({ items = [], offset = 10, scaleFactor = 0.06 }) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prev) => {
        const newArray = [...prev];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 7000);
  };

  return (
    <div className="relative h-full w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-full w-full rounded-2xl overflow-hidden shadow-xl border"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <Image
            src={card.image}
            alt={card.alt || "Website showcase"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index === 0} // Only prioritize first image
            quality={80}
            placeholder="blur"
            blurDataURL={card.blurDataURL}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}
    </div>
  );
};
