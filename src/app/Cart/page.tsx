import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CartContent from './CartContent'


export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white ">
        <div className="max-w-[1440px] py-16 px-16  mx-auto">
          <div className="bg-gray-50 p-4 mb-8 rounded">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-medium">Free Delivery</h2>
                <p className="text-sm text-gray-600">Applies to orders of ₹ 14 000.00 or more.</p>
              </div>
              <button className="text-sm underline">View details</button>
            </div>
          </div>
          <CartContent />
        </div>
      </div>
      <Footer />
    </>
  )
}
