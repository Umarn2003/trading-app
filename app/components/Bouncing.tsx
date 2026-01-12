"use client";

import { motion } from "framer-motion";

export default function BouncingShape({ className }:{className?: string}) {
  return (
    <motion.div
      className={`w-16 h-16 bg-yellow-500 rounded-full ${className}`}
      animate={{ x: [0, 100, 0] }} 
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
}
