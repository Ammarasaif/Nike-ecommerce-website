"use client"

import Link from 'next/link';
import { useState } from 'react';

const Feature = () => {
  return (
    <div>
    <div className="px-4 sm:px-8 lg:px-12 py-20">
      {/* Container for the entire section */}
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h1 className="text-[23px] font-semibold text-left text-[#111] mb-3">
          Featured
        </h1>

        {/* Background image container */}
        <div className="relative w-full h-auto">
          <img
            src="3.png"
            className="w-full h-[700px] object-cover"
            alt="Featured"
          />

          {/* Content Box */}
          <div className="px-4 sm:px-8 lg:px-12 mt-10 flex justify-center items-center">
  <div className="max-w-screen-xl mx-auto text-center">
    <p className="text-[54px] font-medium text-[#111] uppercase">
      STEP INTO WHAT FEELS GOOD
    </p>
    <p className="text-[15px] text-[#111] mt-4">
      Cause everyone should know the feeling of running in that perfect pair.
    </p>

    {/* Button */}
    <Link href="Featured">
      <div className="flex justify-center items-center w-40 mt-6 py-[7.5px] px-[22.5px] bg-white border hover:bg-black hover:border-black border-neutral-200 rounded-[30px] group mx-auto">
        <p className="text-[15px] font-medium text-center text-black group-hover:text-white">
          Find Your Shoe
        </p>
      </div>
    </Link>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;