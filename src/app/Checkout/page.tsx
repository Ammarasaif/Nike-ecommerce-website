import { Truck } from 'lucide-react'
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import CheckoutForm from './CheckoutForm'
import OrderSummary from './OrderSummary'
import Image from "next/image"
import Link from "next/link"


export default function CheckOut() {
  return (
    <>
    <div className="flex py-6 items-center justify-between">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <img src="100.png" className="h-auto w-auto" alt="Logo" />
  </div>

  {/* Icon Section */}
  <div className="flex items-center px-4 space-x-6">
    {/* Phone Icon */}
    <div className="flex items-center space-x-2">
      <PhoneIcon className="h-5 w-5 text-black" />
      <span className="text-black">0315 23095 03</span>
    </div>
    {/* Chat Icon */}
    <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-black" />
    {/* Bag Icon */}
    <ShoppingBagIcon className="h-5 w-5 text-black" />
  </div>
</div>

    <div className="min-h-screen px-20 py-8 bg-white">
      <div className="max-w-[1440px] space-x-8 px-4 py-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="mb-8 ">
          <h1 className="text-2xl font-bold mb-4">How would you like to get your order?</h1>
          <p className="text-sm text-gray-600 mb-4">
            Customs regulation for India require a copy of the recipient's
            KYC. The address on the KYC needs to match the shipping
            address. Our courier will contact you via SMS/email to obtain
            a copy of your KYC. The KYC will be stored securely and
            used solely for the purpose of clearing customs (including
            sharing it with customs officials) for all orders and returns. If
            your KYC does not match your shipping address, please click
            the link for more information. <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </p>
          <button className="w-full border-2 rounded-lg p-4 flex items-center gap-4 border-gray-800">
            <Truck className="w-6 h-6" />
            <span className="font-medium">Deliver It</span>
          </button>
          <CheckoutForm />
        </div>

        <div className="">
          
          <OrderSummary />
        </div>
      </div>
    </div>
    <footer className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left side with location and copyright */}
          <div className="flex items-center gap-2">
            <span className="text-sm">🌍 Pakistan</span>
            <span className="text-sm text-gray-400">© 2023 NIKE, Inc. All Rights Reserved</span>
          </div>

          {/* Middle section with links */}
          <div className="flex gap-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Sale
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Payment methods */}
          <div className="flex items-center gap-2">
            <Image
              src="/footer/3.png"
              alt="Visa"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/2.png"
              alt="Visa Electron"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/1.png"
              alt="Mastercard"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/4.png"
              alt="Maestro"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/5.png"
              alt="American Express"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/6.png"
              alt="Diners Club"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/7.png"
              alt="Discover"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/8.png"
              alt="Net Banking"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/9.png"
              alt="Paytm"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/10.png"
              alt="UPI"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
            <Image
              src="/footer/11.png"
              alt="JCB"
              width={40}
              height={25}
              className="h-4 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
