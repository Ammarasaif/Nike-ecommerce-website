"use client";

import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Link from "next/link";
import Image from "next/image";


const Navbar: React.FC = () => {
  // State for toggling menu on mobile view
  const [menuOpen, setMenuOpen] = useState(false);


  const [cartItems, setCartItems] = useState(0); // Cart ki count rakhta hai

  // Ye function "Add to Cart" button ke liye hai
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-[#F5F5F5] space-x-3 text-gray-800 text-sm flex justify-between items-center p-2">
        {/* Logo */}
        <div>
          <img
          src="/logo.png"
          alt="Logo"
          className="" />
          
        </div>

        {/* Links */}
        <div className="flex items-center space-x-3">
          <a href="Store" className="mx-2 hover:underline">Find a Store</a>
          <span>|</span>
          <a href="Help" className="mx-2 hover:underline">Help</a>
          <span>|</span>
          <a href="Join" className="mx-2 hover:underline">Join Us</a>
          <span>|</span>
          <a href="Login" className="mx-2 hover:underline">Sign In</a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white text-black flex items-center justify-between p-4">
        {/* Logo */}
        <img 
          src="100.png"
          className="text-xl -ml-36 font-bold"
        />

        {/* Menu */}
        <div className="hidden md:flex ml-16 space-x-8">
          <a href="Featured" className="hover:text-blue-400">
            New & Featured
          </a>
          <a href="Stock" className="hover:text-blue-400">
            Men
          </a>
          <a href="Feed" className="hover:text-blue-400">
            Women
          </a>
          <a href="Upcoming" className="hover:text-blue-400">
            Kids
          </a>
          <a href="/" className="hover:text-blue-400">
            Sale
          </a>
          <a href="/" className="hover:text-blue-400">
            SNKRS
          </a>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
     
          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 border border-gray-400 px-2 py-1 rounded-full">
            {/* Search Icon */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16a7 7 0 100-14 7 7 0 000 14zm0 0l4 4m0-4l-4-4"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-28 text-black text-sm"
            />
          </div>


          <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>

          {/* Heart Icon */}
          <div className="cursor-pointer text-lg">&#10084;</div>

          {/* Bag Icon */}
          <Link href="/Cart">
          <div className="cursor-pointer text-lg">           
          <i className="fa fa-shopping-bag"></i>
          {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </div>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
       
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="bg-[#F5F5F5] p-4 space-y-2">
          <a href="Store" className="block hover:underline">Find a Store</a>
          <a href="Help" className="block hover:underline">Help</a>
          <a href="Join" className="block hover:underline">Join Us</a>
          <a href="Login" className="block hover:underline">Sign In</a>
          <a href="Featured" className="block hover:underline">New & Featured</a>
          <a href="Stock" className="block hover:underline">Men</a>
          <a href="Feed" className="block hover:underline">Women</a>
          <a href="Upcoming" className="block hover:underline">Kids</a>
          <a href="/" className="block hover:underline">Sale</a>
          <a href="/" className="block hover:underline">SNKRS</a>
        </div>
      </div>
      </div>
   
  );
};

export default Navbar;