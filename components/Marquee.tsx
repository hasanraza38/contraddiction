"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "EACH PIECE IS MADE ONCE · NOT FOR SALE · FOR CONSIDERATION · COMMISSION BY INVITATION · ";
  const repeatedText = Array(10).fill(text).join("");

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-2 border-y border-[var(--color-border-light)] border-y-[0.5px] bg-[#FFFFFF]">
      <motion.div
        className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)]"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
}
