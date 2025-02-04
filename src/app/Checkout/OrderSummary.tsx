'use client'

import Image from 'next/image'
import { useCart } from '@/app/Context/CartContext';
import { feature } from '@/app/Cart/Data/detail';

export default function OrderSummary() {
  const { cartItems } = useCart()

  const cartProducts = cartItems.map(item => {
    const product = feature.find(p => p.id === item.id)
    return product ? { ...product, quantity: item.quantity } : null
  }).filter(Boolean)

  const subtotal = cartProducts.reduce((total, item) => {
    const price = parseFloat(item!.price.replace('₹', '').replace(',', ''))
    return total + (price * item!.quantity)
  }, 0)

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery/Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500">(The total reflects the price of your order, including all duties and taxes)</p>
      </div>

      <div className="space-y-6 mt-8">
        <p className="text-sm">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
        {cartProducts.map((item) => (
          <div key={item!.id} className="flex gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-lg relative overflow-hidden">
              <Image
                src={item!.img}
                alt={item!.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{item!.title}</h3>
              <p className="text-sm text-gray-600">{item!.title2}</p>
              <p className="text-sm text-gray-600 mt-1">
                Qty: {item!.quantity}
              </p>
              <p className="text-sm text-gray-600">
                ₹ {item!.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
