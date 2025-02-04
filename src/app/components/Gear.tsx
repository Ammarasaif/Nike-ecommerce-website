import { GearCarousel1 } from "@/app/components/GearCarousel1";
import { GearCarousel2 } from "@/app/components/GearCarousel2";

export default function GearUp() {
  return (
    <div>
    <div className="px-4 sm:px-8 lg:px-12">
      {/* Container for the GearUp section */}
      <div className="max-w-screen-xl mx-auto ">
        {/* Heading */}
        <h1 className="font-semibold text-2xl mb-3 ml-2 text-[23px] text-left text-[#111]">
          Gear Up
        </h1>
        </div>
        
        {/* Flex container for carousels */}
        <div className="flex flex-col md:flex-row space-y-14 mt-14 md:space-y-0 md:space-x-10">
          {/* Gear Carousels */}
          <GearCarousel1 />
          <GearCarousel2 />
        </div>
      </div>
      </div>

   
  );
}