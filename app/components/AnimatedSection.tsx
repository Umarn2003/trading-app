import { useEffect, useRef, useState } from "react";

export default function AnimatedOnScroll({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-1000 ease-out
        ${visible ? "animate-zoom-settle" : "opacity-0 scale-150"}
      `}
    >
      {children}
    </div>
  );
}

