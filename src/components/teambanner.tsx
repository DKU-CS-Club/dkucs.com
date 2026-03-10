// components/TeamBanner.js

import Image from "next/image";

export function TeamBanner() {
  return (
    <div className=" relative w-screen h-[200px] sm:h-[300px] md:h-[390px] shadow-md">
      <Image
        // Ensure this image exists in the public directory
        src="/team-banner.png"
        alt="Our Team"
        className="opacity-60"
        priority
        fill
        style={{
          objectFit: "cover"
        }} />
      {/* Overlay Container */}
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
      <h1 className=" object-cover font-lexend object-covertext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-90 text-center px-4">
        Coding the Future Together
      </h1>
      </div>
    </div>
  );
}