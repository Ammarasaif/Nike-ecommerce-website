"use client";

import Link from 'next/link';

const Essential = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 py-16">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-[23px] font-semibold text-left text-[#111] mb-8">
          The Essentials
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative w-full h-[540px]">
            <img
              src="4.png"
              alt="Men's"
              className="w-full h-full object-cover rounded-lg"
            />
            <Link href="Featured">
              <div className="group absolute left-1/2 bottom-8 transform -translate-x-1/2 px-6 py-3 rounded-[30px] bg-white border hover:bg-black hover:border-black border-neutral-200">
                <p className="text-[15px] font-medium text-black group-hover:text-white">
                  Men's
                </p>
              </div>
            </Link>
          </div>

          <div className="relative w-full h-[540px]">
            <img
              src="9.png"
              alt="Women's"
              className="w-full h-full object-cover rounded-lg"
            />
            <Link href="Featured">
              <div className="group absolute left-1/2 bottom-8 transform -translate-x-1/2 px-6 py-3 rounded-[30px] bg-white border hover:bg-black hover:border-black border-neutral-200">
                <p className="text-[15px] font-medium text-black group-hover:text-white">
                  Women's
                </p>
              </div>
            </Link>
          </div>

          <div className="relative w-full h-[540px]">
            <img
              src="7.png"
              alt="Kids'"
              className="w-full h-full object-cover rounded-lg"
            />
            <Link href="Featured">
              <div className="group absolute left-1/2 bottom-8 transform -translate-x-1/2 px-6 py-3 rounded-[30px] bg-white border hover:bg-black hover:border-black border-neutral-200">
                <p className="text-[15px] font-medium text-black group-hover:text-white">
                  Kids'
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essential;