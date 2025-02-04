'use client'

import Image from 'next/image'
import { Trash2, Heart, Minus, Plus } from 'lucide-react'
import { feature } from '@/app/Cart/Data/detail'
import {useCart} from "@/app/Context/CartContext";

import router from 'next/router'
import { useRouter } from 'next/navigation';


export default function CartContent() {
    const router = useRouter()
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const cartProducts = cartItems.map(item => {
    const product = feature.find(p => p.id === item.id)
    return product ? { ...product, quantity: item.quantity } : null
  }).filter(Boolean)

  const subtotal = cartProducts.reduce((total, item) => {
    const price = parseFloat(item!.price.replace('₹', '').replace(',', ''))
    return total + (price * item!.quantity)
  }, 0)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Bag</h1>
        <div className="space-y-6">
          {cartProducts.map((item) => (
            <div key={item!.id} className="flex gap-4 pb-6 border-b">
              <div className="w-24 h-24 bg-gray-100 rounded-lg relative overflow-hidden">
                <Image
                  src={item!.img}
                  alt={item!.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item!.title}</h3>
                    <p className="text-gray-600 text-sm">{item!.title2}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => updateQuantity(item!.id, Math.max(1, item!.quantity - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item!.quantity}</span>
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => updateQuantity(item!.id, item!.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-medium">MRP: {item!.price}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center text-sm text-gray-600">
                    <Heart className="w-4 h-4 mr-1" />
                    Favorite
                  </button>
                  <button 
                    className="flex items-center text-sm text-gray-600"
                    onClick={() => removeFromCart(item!.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <button
          onClick={() => router.push('/Checkout')}
           className="w-full bg-black text-white py-4 rounded-full mt-6 font-medium hover:opacity-90">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
