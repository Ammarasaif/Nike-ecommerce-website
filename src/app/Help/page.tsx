import { Button } from "@/app/components/Ui/button";
import { Input } from "@/app/components/Ui/input";
import { Clock, Mail, MapPin, MessageSquare, Phone, ThumbsDown, ThumbsUp } from 'lucide-react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Help() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">GET HELP</h1>
        <div className="max-w-xl mx-auto">
          <Input
            type="search"
            placeholder="What can we help you with?"
            className="w-full"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        {/* Left Column - Main Content */}
        <div>
          <h2 className="text-xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          
          <p className="mb-4 text-sm">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>

          <p className="mb-4 text-sm">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
          </p>

          <p className="mb-4 text-sm">
            If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
          </p>

          <p className="mb-4 text-sm">Apple Pay</p>

          <p className="mb-4 text-sm">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{' '}
            <Button variant="link" className="p-0 h-auto text-sm">join us today</Button>.
          </p>

          <div className="flex gap-4 mb-8">
            <Button variant="secondary" className="rounded-full">JOIN US</Button>
            <Button variant="secondary" className="rounded-full">SHOP NIKE</Button>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold mb-4">FAQs</h3>
            
            <div>
              <h4 className="font-bold mb-2">Does my card need international purchases enabled?</h4>
              <p className="text-sm mb-4">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
              </p>
              <p className="text-sm text-gray-500">
                Please note, some banks may charge a small transaction fee for international orders.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Can I pay for my order with multiple methods?</h4>
              <p className="text-sm">
                No, payment for Nike orders can't be split between multiple payment methods.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
              <p className="text-sm">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Why don't I see Apple Pay as an option?</h4>
              <p className="text-sm">
                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest iOS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
              </p>
            </div>

            <div>
              <p className="mb-2">Was this answer helpful?</p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-bold mb-2">RELATED</h3>
              <div className="space-y-2">
                <Button variant="link" className="p-0 h-auto text-sm">WHAT ARE NIKE'S DELIVERY OPTIONS?</Button>
                <br />
                <Button variant="link" className="p-0 h-auto text-sm">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
          
          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <p className="font-bold">0315 2309503</p>
            <p className="text-sm">Products & Orders: 24 hours a day,</p>
            <p className="text-sm">7 days a week</p>
            <p className="text-sm">Company Info & Enquiries: 07:30 -</p>
            <p className="text-sm">16:30, Monday - Friday</p>
          </div>

          <div className="text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">24 hours a day</p>
            <p className="text-sm">7 days a week</p>
          </div>

          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">We'll reply within</p>
            <p className="text-sm">five business days</p>
          </div>

          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <p className="font-bold">STORE LOCATOR</p>
            <p className="text-sm">Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
