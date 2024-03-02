"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
      className: "text-white",
    },
    {
      text: "awesome",
      className: "text-white",
    },
    {
      text: "apps",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "Booking.com",
      className: "text-[#B1CF5F] dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-full bg-black border-white border-[1px] text-white text-sm hover:bg-[#73E2A7] hover:text-black hover:border-none  transition-all duration-300">
          Explore
        </button>
        <button className="w-40 h-10 text-black px-7 py-2 text-center bg-[#73E2A7] text-sm rounded-full hover:bg-black hover:text-white hover:border-[1px] border-white transition-all duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
}
