"use client";
import { useEffect, useState } from "react";

export default function ClientSlider({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img
        src={images[currentIndex]}
        alt={name}
        className="w-full h-80 object-cover rounded-xl transition-all duration-500"
      />

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#C09059]" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
