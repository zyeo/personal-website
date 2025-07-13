"use client";
import { useState, useEffect } from "react";

const images = [
  "/photo_gallery/image1.jpg",
  "/photo_gallery/image2.jpg",
  "/photo_gallery/image3.jpg",
  "/photo_gallery/image4.jpg",
  "/photo_gallery/image5.jpg",
  "/photo_gallery/image6.jpg",
//   "/photo_gallery/image7.jpg",
//   "/photo_gallery/image8.jpg",
//   "/photo_gallery/image9.jpg",
//   "/photo_gallery/image10.jpg",
//   "/photo_gallery/image11.jpg",
//   "/photo_gallery/image12.jpg",
//   "/photo_gallery/image13.jpg",
  // Add more image filenames as needed
];

// Helper to get number of columns based on window width
function getNumCols() {
  if (typeof window === "undefined") return 2;
  if (window.innerWidth >= 1024) return 5; // lg
  if (window.innerWidth >= 768) return 4;  // md
  if (window.innerWidth >= 640) return 3;  // sm
  return 2;
}

// Helper to reorder images for row-major navigation
function getRowMajorOrder(images: string[], numCols: number) {
  const numRows = Math.ceil(images.length / numCols);
  const rowMajor: string[] = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const idx = col * numRows + row;
      if (idx < images.length) rowMajor.push(images[idx]);
    }
  }
  return rowMajor;
}

export default function Photos() {
  const [selected, setSelected] = useState<number | null>(null);
  const [numCols, setNumCols] = useState(getNumCols());

  // Update numCols on resize
  useEffect(() => {
    const handleResize = () => setNumCols(getNumCols());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rowMajorImages = getRowMajorOrder(images, numCols);
  const selectedRowMajorIdx =
    selected !== null ? rowMajorImages.indexOf(images[selected]) : null;

  // Navigation handlers
  const showPrev = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation?.();
    if (selectedRowMajorIdx !== null) {
      const prevIdx =
        (selectedRowMajorIdx - 1 + rowMajorImages.length) % rowMajorImages.length;
      setSelected(images.indexOf(rowMajorImages[prevIdx]));
    }
  };
  const showNext = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation?.();
    if (selectedRowMajorIdx !== null) {
      const nextIdx = (selectedRowMajorIdx + 1) % rowMajorImages.length;
      setSelected(images.indexOf(rowMajorImages[nextIdx]));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "ArrowRight") showNext(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, [selected, numCols]);

  return (
    <div className="min-h-screen px-2 py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4">My Photos</h1>
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
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
      </div>

      {/* Modal for full-size image with blurred background and arrows */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Left Arrow */}
            <button
              className="absolute left-[-3rem] md:left-[-4rem] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-2xl rounded-full p-2 shadow border border-gray-200"
              onClick={showPrev}
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
            {/* Right Arrow */}
            <button
              className="absolute right-[-3rem] md:right-[-4rem] top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-2xl rounded-full p-2 shadow border border-gray-200"
              onClick={showNext}
              aria-label="Next"
            >
              &#8594;
            </button>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
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