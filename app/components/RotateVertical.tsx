"use client";

import React, { useEffect, useRef, useState } from "react";

interface RotateVerticalProps {
  children: React.ReactNode;
  duration?: number; 
  delay?: number; 
  className?: string;
}

export default function RotateVertical({
  children,
  duration = 1,
  delay = 0,
  className = "",
}: RotateVerticalProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        animation: animate
          ? `rotateVertical ${duration}s ease-out forwards`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
