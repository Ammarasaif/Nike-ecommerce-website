import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import ProductItem  from "@/components/ProductItem";
import { Button } from "@/app/components/Ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Checkbox } from "@/app/components/Ui/checkbox"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Ui/select"
import { feature } from "@/app/Cart/Data/detail";


export default function Featured() {
  return (
    
    <div className="min-h-screen flex flex-col">
    
    

     <Navbar />
    

    
   
<div className="px-4 sm:px-8 lg:px-12">
<main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
            <h1 className="text-xl font-semibold">New (500)</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-sm">
                <FiFilter className="mr-2" />
                Filters
              </Button>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 space-y-8">
              {/* Categories */}
              <div className="space-y-4">
                <h3 className="font-semibold">Categories</h3>
                <div className="space-y-2">
                  {['Shoes', 'Sports Bras', 'Tops & T-Shirts', 'Hoodies & Sweatshirts', 'Jackets', 'Trousers & Tights', 'Shorts', 'Tracksuits'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="space-y-4">
                <h3 className="font-semibold">Gender</h3>
                <div className="space-y-2">
                  {['Men', 'Women', 'Unisex'].map((gender) => (
                    <div key={gender} className="flex items-center space-x-2">
                      <Checkbox id={gender} />
                      <label htmlFor={gender} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-4">
                <h3 className="font-semibold">Shop By Price</h3>
                <div className="space-y-2">
                  {['Under ₹ 2,500.00', '₹ 2,501.00 - ₹ 7,500.00', 'Over ₹ 7,500.00'].map((price) => (
                    <div key={price} className="flex items-center space-x-2">
                      <Checkbox id={price} />
                      <label htmlFor={price} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {price}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {feature.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>





  
   





  


       
       
       
 






<section className=" w-full py-16">
  <div className="-mt-6 w-full">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    
      <div className="space-y-4 w-full">
        <h1 className="font-semibold ml-2 text-xl">Related Categories</h1>

        {/* Flex container for buttons */}
        <div className="flex flex-wrap gap-2">
          
          {/* First Row Buttons */}
          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full shadow-none text-black border-[1px]  group-hover:text-white">
                Best Selling Products
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                Best Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Basketball Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Football Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Men's Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Running Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Men's Shoes
              </Button>
            </Link>
          </div>

          {/* Force a new row for the last three buttons */}
          <div className="w-full"></div>

          {/* Last Row Buttons */}
          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                New Jordan Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Women's Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Training & Gym
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
 





   
    

        
    <Footer />

   


    
  
   


   
    

    </div>
  );
}