"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { PROFILE_IMAGE_ALT, PROFILE_IMAGE_SRC } from "@/data/portfolio";

interface ProfileImageProps {
  className?: string;
  priority?: boolean;
}

/**
 * Portrait with a graceful fallback. The image source lives in
 * `PROFILE_IMAGE_SRC` (src/data/portfolio.ts) so the real photo can be swapped in
 * without touching this component.
 */
export default function ProfileImage({ className, priority = false }: ProfileImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={PROFILE_IMAGE_ALT}
        className={`flex items-center justify-center bg-gradient-to-b from-[#1d4458] to-navy text-white/70 ${
          className ?? ""
        }`}
      >
        <User className="h-1/3 w-1/3" strokeWidth={1} aria-hidden />
      </div>
    );
  }

  return (
    <Image
      src={PROFILE_IMAGE_SRC}
      alt={PROFILE_IMAGE_ALT}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 85vw"
      className={`object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}
