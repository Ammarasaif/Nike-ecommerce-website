"use client";

import Link from "next/link";


const Icon = () => {
  return (
    <div className="flex justify-center items-center py-28">
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 justify-items-center text-center md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col">
            <Link href="Featured">
              <h3 className="text-lg font-semibold hover:text-black cursor-pointer text-black mb-4">Icon</h3>
            </Link>
            <ul className="space-y-4 text-base">
              <li><Link href="Featured" className="hover:text-black text-[#757575]">Air Force</Link></li>
              <li><Link href="Featured" className="hover:text-black text-[#757575]">Huarache</Link></li>
              <li><Link href="Featured" className="hover:text-black text-[#757575]">Air Max 90</Link></li>
              <li><Link href="Featured" className="hover:text-black text-[#757575]">Air Max 95</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <Link href="Stock">
              <h3 className="text-lg font-semibold hover:text-black cursor-pointer text-black mb-4">Shoes</h3>
            </Link>
            <ul className="space-y-4 text-base">
              <li><Link href="Stock" className="hover:text-black text-[#757575]">All Shoes</Link></li>
              <li><Link href="Stock" className="hover:text-black text-[#757575]">Custom Shoes</Link></li>
              <li><Link href="Stock" className="hover:text-black text-[#757575]">Jordan Shoes</Link></li>
              <li><Link href="Stock" className="hover:text-black text-[#757575]">Running Shoes</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <Link href="Feed">
              <h3 className="text-lg font-semibold hover:text-black cursor-pointer text-black mb-4">Clothing</h3>
            </Link>
            <ul className="space-y-4 text-base">
              <li><Link href="Feed" className="hover:text-black text-[#757575]">All Clothing</Link></li>
              <li><Link href="Feed" className="hover:text-black text-[#757575]">Modest Wear</Link></li>
              <li><Link href="Feed" className="hover:text-black text-[#757575]">Hoodies & Pullovers</Link></li>
              <li><Link href="Feed" className="hover:text-black text-[#757575]">Shirts & Tops</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <Link href="Upcoming">
              <h3 className="text-lg font-semibold hover:text-black cursor-pointer text-black mb-4">Kids</h3>
            </Link>
            <ul className="space-y-4 text-base">
              <li><Link href="Upcoming" className="hover:text-black text-[#757575]">Infant & Toddler Shoes</Link></li>
              <li><Link href="Upcoming" className="hover:text-black text-[#757575]">Kid&apos;s Shoes</Link></li>
              <li><Link href="Upcoming" className="hover:text-black text-[#757575]">Kid&apos;s Jordan Shoes</Link></li>
              <li><Link href="Upcoming" className="hover:text-black text-[#757575]">Kid&apos;s Basketball Shoes</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon;