"use client"

import Link from 'next/link';

const Miss = () => {
  return (
    <div className="">
      {/* Container for the entire section */}
      <div className='px-4 sm:px-8 lg:px-12'>
        <div className="max-w-screen-xl mx-auto">
          {/* Heading with space between image */}
          <p className="text-[22px] font-semibold text-left text-[#111] w-[111.48px] h-[27px] mb-8">
            Don't Miss
          </p>
          <div className="relative w-full h-[auto]">
            {/* Background Image */}
            <img
              src="5.png"
              className="w-full h-[700px] object-cover"
              alt="Flight Essentials"
            />
          </div>
          <div className='px-4 sm:px-8 lg:px-12'>
            <div className="max-w-screen-xl mt-2 mx-auto">
              {/* Title */}
              <p className="text-[52px] font-medium text-center uppercase text-[#111] mt-8">
                FLIGHT ESSENTIALS
              </p>
              {/* Description */}
              <p className="text-[15px] text-center text-[#111] mt-4">
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
              </p>
              {/* Button */}
              <Link href="Featured">
                <div className="flex group justify-center w-20 items-center mt-6 py-[7.5px] px-[21.875px] bg-white border hover:bg-black hover:border-black border-neutral-200 rounded-[30px]  mx-auto">
                  <p className="text-[15px] font-medium text-center text-black group-hover:text-white">
                    Shop
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miss;