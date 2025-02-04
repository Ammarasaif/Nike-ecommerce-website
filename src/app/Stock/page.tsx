"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Stock = () => {
    return (
      <div>
    <Navbar />
<div className="w-[1440px] h-0   [4681px] relative">
  <div className="w-[1440px] h-10 absolute left-0 top-0 bg-white">
    <div className="w-[1440px] h-10 absolute left-0 top-0">
      <div className="w-[147.8px] h-[37px] absolute left-0 top-[1.5px]">
        <svg
          width={12}
          height={10}
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-2.5 absolute left-7 top-[13.5px]"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_1_2801)">
            <path
              d="M8.25682 9.99971C8.04349 9.99971 7.83349 9.91638 7.66682 9.75638L2.91016 4.99971L7.66682 0.243047C7.99349 -0.0836198 8.52016 -0.0836198 8.84682 0.243047C9.17349 0.569714 9.17349 1.09638 8.84682 1.42305L5.26682 4.99971L8.84349 8.57638C9.17016 8.90305 9.17016 9.42971 8.84349 9.75638C8.68016 9.91638 8.46682 9.99971 8.25682 9.99971Z"
              fill="#757575"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2801">
              <rect width={12} height={10} fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="absolute left-11 top-[7px] text-[11px] text-left text-[#757575]">
          Visit Nike.com
        </p>
      </div>
      <div className="w-[283.44px] h-10 absolute left-[1156.56px] top-0">
        <Link href="Login">
        <p className="absolute left-10 top-[8.5px] text-xs text-center text-[#757575]">
          Join/Log In
        </p>
        </Link>
        <Link href="Help">
        <p className="absolute left-[118.72px] top-[8.5px] text-xs text-left text-[#757575]">Help</p>
        </Link>
        <Link href="Cart">
        <div>
        <svg
          width={19}
          height={18}
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px] absolute left-[163.41px] top-[11px]"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_1_2808)">
            <path
              d="M16.3924 4.86035L5.09742 3.24035L3.61242 2.29535C3.49242 2.23535 3.37992 2.22035 3.27492 2.25035C3.16992 2.28035 3.07992 2.34785 3.00492 2.45285C2.92992 2.55785 2.90742 2.67035 2.93742 2.79035C2.96742 2.91035 3.04242 3.00035 3.16242 3.06035L4.60242 3.96035L7.12242 10.2604L6.22242 12.5104C6.16242 12.6604 6.17742 12.8029 6.26742 12.9379C6.35742 13.0729 6.47742 13.1404 6.62742 13.1404H15.8974C16.0174 13.1404 16.1224 13.0954 16.2124 13.0054C16.3024 12.9154 16.3474 12.8104 16.3474 12.6904C16.3474 12.5704 16.3024 12.4654 16.2124 12.3754C16.1224 12.2854 16.0174 12.2404 15.8974 12.2404H7.25742L7.88742 10.7104H15.9424C16.0624 10.7104 16.1674 10.6729 16.2574 10.5979C16.3474 10.5229 16.3924 10.4254 16.3924 10.3054L16.7524 5.35535C16.7824 5.23535 16.7599 5.13035 16.6849 5.04035C16.6099 4.95035 16.5124 4.89035 16.3924 4.86035ZM15.3124 13.2754C14.9824 13.2754 14.6899 13.3954 14.4349 13.6354C14.1799 13.8754 14.0524 14.1679 14.0524 14.5129C14.0524 14.8579 14.1799 15.1504 14.4349 15.3904C14.6899 15.6304 14.9824 15.7504 15.3124 15.7504C15.6424 15.7504 15.9349 15.6304 16.1899 15.3904C16.4449 15.1504 16.5724 14.8579 16.5724 14.5129C16.5724 14.1679 16.4449 13.8754 16.1899 13.6354C15.9349 13.3954 15.6424 13.2754 15.3124 13.2754ZM8.38242 13.2754C8.02242 13.2754 7.72242 13.3954 7.48242 13.6354C7.24242 13.8754 7.12242 14.1679 7.12242 14.5129C7.12242 14.8579 7.24242 15.1504 7.48242 15.3904C7.72242 15.6304 8.01492 15.7504 8.35992 15.7504C8.70492 15.7504 8.99742 15.6304 9.23742 15.3904C9.47742 15.1504 9.59742 14.8579 9.59742 14.5129C9.59742 14.1679 9.47742 13.8754 9.23742 13.6354C8.99742 13.3954 8.71242 13.2754 8.38242 13.2754Z"
              fill="#757575"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2808">
              <rect width={18} height={18} fill="white" transform="translate(0.96875)" />
            </clipPath>
          </defs>
        </svg>
        </div>
        </Link>

        
      </div>
    </div>
  </div>
  <div className="w-[1440px] h-[4641px] absolute left-0 top-10">
    <div className="w-[1440px] h-[57px] absolute left-0 top-0 bg-white">
      <div className="w-[1440px] h-[57px] absolute left-0 top-0">
        <svg
          width={50}
          height={36}
          viewBox="0 0 50 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px] h-[35px] absolute left-7 top-[6.5px]"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_1_2819)">
            <path
              d="M13.2998 1.72774C11.1978 4.06774 10.2998 5.45974 9.81781 7.11674C9.37781 8.62874 9.61081 9.87674 10.4888 10.7427C11.1858 11.4327 11.9258 11.6897 13.2058 11.6897C14.2468 11.6897 15.1378 11.5197 16.4428 11.0747C17.1578 10.8367 40.2378 1.26274 40.3948 1.14474C40.398 1.14193 40.4006 1.13846 40.4023 1.13459C40.4041 1.13071 40.405 1.1265 40.405 1.12224C40.405 1.11799 40.4041 1.11378 40.4023 1.1099C40.4006 1.10602 40.398 1.10256 40.3948 1.09974C40.3828 1.08774 35.3198 2.39974 29.1408 4.01774C22.9668 5.62974 17.6728 7.00374 17.3778 7.06574C16.5618 7.23574 15.2258 7.22274 14.6478 7.04074C14.2839 6.92758 13.9504 6.73334 13.6724 6.47266C13.3944 6.21198 13.1791 5.89164 13.0428 5.53574C12.9168 5.22774 12.8978 5.05874 12.8978 4.44974C12.9048 3.55274 13.0678 2.95074 13.6198 1.82174C13.8268 1.40174 13.9898 1.03774 13.9768 1.02474C13.9588 1.01274 13.6568 1.33174 13.2998 1.72774ZM3.78981 17.7127C1.60581 18.2077 0.119809 20.1467 0.0188087 22.6427C-0.0311913 23.8357 0.200809 24.7257 0.783809 25.6297C1.09181 26.0877 2.06981 27.0657 2.72881 27.5677C3.87681 28.4397 4.19081 28.8607 4.12781 29.4437C4.08381 29.8077 3.89581 30.0647 3.52581 30.2407C2.62881 30.6857 1.34281 30.1337 0.294809 28.8537L0.0628087 28.5717V33.7847L0.482809 33.9167C1.33581 34.1867 1.61281 34.2177 3.10481 34.2177C4.44181 34.2177 4.57981 34.2057 5.01881 34.0737C6.34281 33.6597 7.42181 32.7567 8.02381 31.5707C8.13681 31.3507 8.28081 31.0307 8.34381 30.8487L8.46281 30.5167V32.3167L8.46881 34.1237H12.7348L12.7478 30.2097L12.7668 26.2947L14.2718 30.1907L15.7838 34.0927L17.6158 34.1117L19.4478 34.1237V17.7497H15.1818L15.1688 21.3007L15.1508 24.8457L14.1468 21.3007L13.1428 17.7507H8.46881V22.5617C8.46281 27.3617 8.46281 27.3797 8.34381 27.0537C8.04281 26.2137 7.43981 25.4477 6.49381 24.7077C6.12281 24.4187 5.60881 24.0107 5.34481 23.8037C4.72381 23.3137 4.45481 22.9257 4.45481 22.5117C4.45481 22.2477 4.48481 22.1667 4.67981 21.9597C4.93681 21.6707 5.21981 21.5577 5.67081 21.5647C6.16681 21.5767 6.91281 21.9717 7.46481 22.5177L7.90481 22.9507V18.2647L7.50281 18.1017C6.65581 17.7687 6.17881 17.6747 5.14381 17.6497C4.46681 17.6367 4.05381 17.6557 3.78981 17.7127ZM45.0558 17.7437C44.8058 17.8067 44.3538 17.9757 44.0588 18.1267C43.1488 18.5777 42.2648 19.5447 41.8628 20.5227C41.7748 20.7427 41.6998 20.9307 41.6878 20.9367C41.6748 20.9497 41.5678 20.7547 41.4488 20.4977C40.7208 18.9357 39.2848 18.0697 37.0138 17.8187C36.5498 17.7627 34.9178 17.7497 31.4988 17.7627L26.6438 17.7817L25.5708 20.0647L24.4978 22.3427L24.4788 20.0457L24.4668 17.7497H20.0748V34.1237H24.4668V30.6857L24.4728 27.2547L25.7968 30.6857L27.1268 34.1237H35.4448L35.4648 31.8777C35.4708 30.6477 35.4708 29.1737 35.4648 28.6037C35.4578 28.0327 35.4768 27.6117 35.5018 27.6617C35.5268 27.7117 36.0658 29.1867 36.6998 30.9367L37.8478 34.1167L40.4888 34.1487C41.9388 34.1687 43.6828 34.1987 44.3658 34.2247C45.4708 34.2557 45.6518 34.2427 46.1538 34.1247C46.856 33.9584 47.5131 33.64 48.079 33.1922C48.6448 32.7444 49.1056 32.1779 49.4288 31.5327C49.8058 30.7797 49.9438 30.1717 49.9808 29.1677C50.0628 27.0157 49.4288 25.8487 47.3338 24.2747C45.8658 23.1767 45.5458 22.6367 45.9838 22.0157C46.4238 21.3957 47.4468 21.4327 48.3498 22.1037C48.7258 22.3797 49.4348 23.1077 49.4348 23.2137C49.4348 23.2457 49.4668 23.2707 49.4978 23.2707C49.5358 23.2707 49.5608 22.3927 49.5608 20.7677V18.2697L49.1968 18.1067C48.4818 17.7867 47.8728 17.6737 46.6438 17.6487C45.6958 17.6297 45.4388 17.6437 45.0558 17.7437ZM31.0408 28.7727L31.0228 32.1477L29.5358 28.5597C28.7138 26.5897 28.0428 24.9517 28.0428 24.9207C28.0428 24.8957 28.7128 23.4777 29.5288 21.7777L31.0228 18.6777L31.0408 22.0407C31.0478 23.8917 31.0478 26.9217 31.0408 28.7727ZM36.6438 21.5577C37.2518 21.9027 37.5718 22.5927 37.4968 23.4277C37.4088 24.5187 36.7188 25.2717 35.8088 25.2777H35.4448V21.3067L35.8778 21.3387C36.2108 21.3637 36.3928 21.4187 36.6438 21.5577ZM42.8418 26.4267C43.1368 26.7337 43.6638 27.2107 44.0088 27.4867C44.3538 27.7627 44.7678 28.0947 44.9368 28.2327C45.8908 29.0357 45.6398 30.1717 44.4598 30.3847C43.6888 30.5227 42.3208 29.7697 41.6938 28.8607C41.5938 28.7157 41.4868 28.6037 41.4618 28.6037C41.4298 28.6037 41.3988 29.2177 41.3918 29.9637L41.3738 31.3197L40.4138 29.3307C39.8808 28.2327 39.4598 27.3357 39.4728 27.3297C40.1248 27.0037 40.3068 26.8717 40.7208 26.4697C41.0978 26.0997 41.2548 25.8797 41.4678 25.4537L41.7378 24.9077L42.0198 25.3847C42.1768 25.6547 42.5348 26.1067 42.8418 26.4267Z"
              fill="#FF0017"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2819">
              <rect width={50} height={35} fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
        <div className="w-[836px] h-[57px] absolute left-[315px] top-0">
        <Link href="Feed">          
          <p className="w-[36.67px] h-[17px] absolute left-[294.84px] top-0 text-[15px] font-medium text-center capitalize text-[#111]">
            Feed
          </p>
        </Link>

          <div className="w-[57.81px] h-[57px] absolute left-[371.31px] top-0">
        <Link href="Stock">
            <p className="absolute left-px top-0 text-[15px] font-medium text-center capitalize text-[#111]">
              In Stock
            </p>
        </Link>

            <div className="w-[57.81px] h-1 absolute left-[-1px] top-  [52px] bg-white/0" />
          </div>
        <Link href="Upcoming">
          <p className="w-[72.23px] h-[17px] absolute left-[469.13px] top-0 text-[15px] font-medium text-center capitalize text-[#111]">
            Upcoming
          </p>
        </Link>

        </div>
        
      </div>
    </div>
    <div className="w-[1440px] h-auto  [4560px] absolute left-0 top-[px]">
      <div className="w-[1440px] h-[4444px] absolute left-0 top-0 bg-white">
        <div className="w-56 h-[252px] absolute left-7 top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image-3.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image-2.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image-4.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image-5.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-0 overflow-hidden bg-neutral-100">
          <img
            src="stock/image-6.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-7.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-10.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-8.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-9.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-11.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[260px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-12.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-13.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-14.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-15.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-16.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-18.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[520px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-17.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-19.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-20.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-21.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-22.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-23.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[780px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-24.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-25.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-26.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-27.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-28.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-29.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[1040px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-30.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-31.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-32.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-33.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-34.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-35.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[1300px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-36.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-44.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-37.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-39.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-38.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-40.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[1560px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-41.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-43.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-42.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-45.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-46.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-53.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[1820px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-48.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-47.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-49.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-50.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-52.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-51.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[2080px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-99.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-55.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-54.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-56.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-57.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-58.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[2340px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-100.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-59.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-61.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-64.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-60.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-62.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[2600px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-98.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-63.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-65.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-66.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-67.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-68.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[2860px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-69.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-70.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-71.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-72.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-74.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-73.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[3120px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-75.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-76.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-77.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-78.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-79.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-81.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[3380px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-80.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-82.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-84.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-83.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-86.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-85.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[3640px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-87.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-88.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-89.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-90.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-91.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[956px] top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-92.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[1188px] top-[3900px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-93.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-7 top-[4160px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-94.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[260px] top-[4160px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-95.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[492px] top-[4160px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-96.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
        <div className="w-56 h-[252px] absolute left-[724px] top-[4160px] overflow-hidden bg-neutral-100">
          <img
            src="stock/image-97.png"
            className="w-56 h-[252.09px] absolute left-[-1px] top-[-1px] object-none"
          />
        </div>
      </div>
      <div className="w-[1440px] h-[116px] absolute left-0 top-[4444px] bg-white">
        <p className="w-[76.7px] h-[17px] absolute left-[681.75px] top-[51px] text-[15px] font-medium text-center text-[#111]">
          Load More
        </p>
      </div>
    </div>
  </div>
</div>

<Footer />
        

</div>




);
};

export default Stock;