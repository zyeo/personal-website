"use client";
import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

const images = [
  "/photo_gallery/bishop.jpg",
  "/photo_gallery/sf_church.jpg",
  "/photo_gallery/vogelsang_peak.jpg",
  "/photo_gallery/yosemite_falls.jpg",
  "/photo_gallery/dark_rock.jpg",
  "/photo_gallery/campfire.jpg",
  "/photo_gallery/half_dome.jpg",
  "/photo_gallery/hd_sit.jpg",
  "/photo_gallery/hd_cables.jpg",
  "/photo_gallery/cat.jpg",
  "/photo_gallery/golden_gate.jpg",
  "/photo_gallery/austin_lightning.jpg",
  "/photo_gallery/zach_climb.jpg",
  "/photo_gallery/glare_cat copy.jpg",
  "/photo_gallery/sf_art.jpg",
  // Add more image filenames as needed
];

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
        setSelected((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      if (e.key === "ArrowRight")
        setSelected((prev) => (prev !== null ? (prev + 1) % images.length : null));
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
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery photo ${idx + 1}`}
            className="mb-4 w-full shadow hover:scale-105 transition-transform cursor-pointer max-w-full"
            onClick={() => setSelected(idx)}
            loading="lazy"
          />
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
                setSelected((selected - 1 + images.length) % images.length);
              }}
              aria-label="Previous"
            >
              &#8592;
            </button>
            {/* Image */}
            <img
              src={images[selected]}
              alt="Full size"
              className="max-h-[80vh] max-w-[90vw] shadow-lg"
              style={{ display: "block" }}
            />
            {/* Image Counter (centered below image, inside modal) */}
            <div
              className="mt-4 px-3 py-1 rounded bg-white/70 text-base font-semibold text-gray-900 shadow"
              style={{ zIndex: 20 }}
            >
              {selected + 1} of {images.length}
            </div>
            {/* Right Arrow */}
            <button
              className="absolute right-[-3rem] md:right-[-4rem] top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full p-2 shadow border border-gray-200"
              style={{ zIndex: 10 }}
              onClick={e => {
                e.stopPropagation();
                setSelected((selected + 1) % images.length);
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