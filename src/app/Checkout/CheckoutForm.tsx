'use client'

import { useState } from 'react';
import { Input } from "@/app/components/Ui/input";
import { Label } from "@/app/components/Ui/label";
import { Checkbox } from "@/app/components/Ui/checkbox";
import { Button } from "@/app/components/Ui/button";
import {
   Select,
   SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/Ui/select";

export default function CheckoutForm() {
  const [step, setStep] = useState('shipping') // shipping, contact, payment

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Enter your name and address:</h2>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address1">Address Line 1</Label>
            <Input id="address1" placeholder="Address Line 1" />
            <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address2">Address Line 2</Label>
            <Input id="address2" placeholder="Address Line 2" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address3">Address Line 3</Label>
            <Input id="address3" placeholder="Address Line 3" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" placeholder="Postal Code" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="locality">Locality</Label>
              <Input id="locality" placeholder="Locality" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="state">State/Territory</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  {/* Add other states */}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" value="India" disabled />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="saveAddress" />
            <Label htmlFor="saveAddress">Save this address to my profile</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="preferredAddress" />
            <Label htmlFor="preferredAddress">Make this my preferred address</Label>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">What's your contact information?</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
              <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Phone Number" />
              <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">What's your PAN?</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="pan">PAN</Label>
              <Input id="pan" placeholder="Enter PAN" />
              <p className="text-xs text-gray-500">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="savePan" />
              <Label htmlFor="savePan">Save PAN details to Nike Profile</Label>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="consent" required />
          <Label htmlFor="consent" className="text-sm">
            I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner
          </Label>
        </div>

        <Button className="w-full md:w-auto" size="lg">
          Continue
        </Button>
      </div>

      <div className="gap-4 text-sm border-t pt-6">
        <button className="text-gray-600 hover:text-black">Delivery</button>
        </div>
      <div className="gap-4 text-sm border-t pt-6">

        <button className="text-gray-600 hover:text-black">Shipping</button>
        </div>
      <div className="gap-4 text-sm border-t pt-6">

        <button className="text-gray-600 hover:text-black">Billing</button>
        </div>
      <div className="gap-4 text-sm border-t pt-6">

        <button className="text-gray-600 hover:text-black">Payment</button>
        </div>
      </div>
   
  )
}
