import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5"; // Import location icon

const Footer = () => {
  return (
    <div>
      <div className="mt-auto w-full h-auto">
        <div className="bg-black">
          <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Column 1 */}
              <div>
                <h3 className="text-sm font-semibold hover:text-white text-[#757575] mb-4">FIND A STORE</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="Product" className="hover:underline hover:text-white text-[#757575]">Become Link Member</Link></li>
                  <li><Link href="mailto:mominshykh7@gmail.com" className="hover:underline hover:text-white text-[#757575]">Sign Up for Email</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Send us Feedback</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Student Discounts</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-sm font-semibold hover:text-white text-[#757575] mb-4">GET HELP</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Order Status</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Delivery</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Returns</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Payment Options</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Contact Us on Nike.com</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Contact Us on All Other Inquiries</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="text-sm font-semibold mb-4 hover:text-white text-[#757575]">ABOUT NIKE</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">News</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Careers</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Investors</Link></li>
                  <li><Link href="#" className="hover:underline hover:text-white text-[#757575]">Sustainability</Link></li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start lg:justify-end items-center gap-4 lg:mt-0">
              <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
              <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
              <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
              <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-6 lg:px-16 py-4 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
              {/* Country and Copyright */}
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <IoLocationOutline className="" />
                <p className="hover:text-white text-[#757575]">India</p>
                <p className="hover:text-white text-[#757575]">© 2023 Nike, Inc. All Rights Reserved</p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#" className="hover:underline hover:text-white text-[#757575]">Guides</Link>
                <Link href="#" className="hover:underline hover:text-white text-[#757575]">Terms of Sale</Link>
                <Link href="#" className="hover:underline hover:text-white text-[#757575]">Terms of Use</Link>
                <Link href="#" className="hover:underline hover:text-white text-[#757575]">Nike Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;