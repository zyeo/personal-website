"use client";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import blurDataURLs from "../../../blurDataURLs.json";

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 3,   // 3 columns on large screens
  1024: 2,      // 2 columns on medium screens
  640: 2,       // 1 column on small screens
};

export default function Photos() {
  const [selected, setSelected] = useState<number | null>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft")
        setSelected((prev) => (prev !== null ? (prev - 1 + blurDataURLs.length) % blurDataURLs.length : null));
      if (e.key === "ArrowRight")
        setSelected((prev) => (prev !== null ? (prev + 1) % blurDataURLs.length : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <div className="min-h-screen px-8 lg:px-20 py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">My Photos</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4"
      >
        {blurDataURLs.map((img, idx) => (
          <div key={idx} className="mb-4 w-full shadow hover:scale-105 transition-transform cursor-pointer max-w-full" onClick={() => setSelected(idx)}>
            <Image
              src={img.src}
              alt={`Gallery photo ${idx + 1}`}
              width={img.width}
              height={img.height}
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>

      {/* Modal for full-size image with blurred background and arrows */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Left Arrow */}
            <button
              className="absolute left-[-3rem] md:left-[-4rem] top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow border border-gray-200"
              style={{ zIndex: 10 }}
              onClick={e => {
                e.stopPropagation();
                setSelected((selected - 1 + blurDataURLs.length) % blurDataURLs.length);
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            {/* Image */}
            <Image
              src={blurDataURLs[selected].src}
              alt="Full size"
              width={blurDataURLs[selected].width}
              height={blurDataURLs[selected].height}
              placeholder="blur"
              blurDataURL={blurDataURLs[selected].blurDataURL}
              className="max-h-[80vh] max-w-[90vw] shadow-lg"
              style={{ display: "block", width: "auto", height: "80vh", maxWidth: "90vw", objectFit: "contain" }}
            />
            {/* Image Counter (centered below image, inside modal) */}
            <div
              className="mt-4 px-3 py-1 rounded bg-white/70 text-base font-semibold text-gray-900 shadow"
              style={{ zIndex: 20 }}
            >
              {selected + 1} of {blurDataURLs.length}
            </div>
            {/* Right Arrow */}
            <button
              className="absolute right-[-3rem] md:right-[-4rem] top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow border border-gray-200"
              style={{ zIndex: 10 }}
              onClick={e => {
                e.stopPropagation();
                setSelected((selected + 1) % blurDataURLs.length);
              }}
              aria-label="Next"
            >
              &#8594;
            </button>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white/70 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 