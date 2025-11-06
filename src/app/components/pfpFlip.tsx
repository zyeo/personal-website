"use client";

import { useState } from "react";

export default function PfpFlip({ className = "" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex justify-center items-center ${className}"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-36 h-36 rounded-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transition: "transform 1s cubic-bezier(0.19, 1, 0.22, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          boxShadow: isFlipped
            ? "0 10px 20px rgba(0,0,0,0.25)"
            : "0 5px 10px rgba(0,0,0,0.15)",
        }}
        onClick={() => setIsFlipped(v => !v)}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden rounded-full border-4 border-sky-500 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="/profile_photos/pfp3.jpg"
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden rounded-full border-4 border-sky-500 shadow-lg"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="/profile_photos/benji.jpg"
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
