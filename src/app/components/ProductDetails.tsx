'use client'

import Image from 'next/image'
import { useCart } from '@/app/Context/CartContext';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Items } from '@/app/Cart/Data/detail';

interface ProductDetailsProps {
  product: Items
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart()
  const router = useRouter() 


  const handleAddToCart = () => {
    addToCart(product.id)
  router.push("/Cart");
  }

  return (
    <div className='px-28  py-14'>
    <div className="grid grid-cols-1 space-x-6 md:grid-cols-2 gap-8">
      <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.img}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-gray-500 mb-4">{product.title2}</p>
        <span className="block">PLT.AF.ORM</span>
        <div className="mt-8">
          <p className="text-sm md:text-base text-gray-700 mb-6">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release
            an artisan finish.
          </p>
          <p className="text-2xl font-bold mb-6">{product.price}</p>
         
          <button 
            onClick={handleAddToCart}
            className="flex justify-center items-center lg:w-auto border rounded-full bg-white text-black text-sm md:text-base font-medium py-3 px-6 hover:text-white hover:bg-black"
          >
            Add To Cart
          </button>
          
        </div>
      </div>
    </div>
    </div>
  )
}
