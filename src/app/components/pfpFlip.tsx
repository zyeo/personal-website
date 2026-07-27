"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      className="profile-flip"
      aria-label={isFlipped ? "Show Zach's portrait" : "Flip portrait to meet Benji"}
      aria-pressed={isFlipped}
      onClick={() => setIsFlipped((value) => !value)}
    >
      <span className={`profile-flip-inner${isFlipped ? " is-flipped" : ""}`}>
        <span className="profile-face profile-front">
          <Image
            src="/profile_photos/pfp4.jpg"
            alt="Zach smiling in a café"
            fill
            priority
            sizes="(max-width: 700px) 62vw, 360px"
          />
        </span>
        <span className="profile-face profile-back" aria-hidden={!isFlipped}>
          <Image
            src="/profile_photos/benji2.jpg"
            alt="Benji the dog"
            fill
            sizes="(max-width: 700px) 62vw, 360px"
          />
        </span>
      </span>
    </button>
  );
}
