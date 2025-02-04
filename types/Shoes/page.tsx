"use client";

import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Product } from "../products";
import { allProducts } from "@/sanity/lib/queries";
import {client, urlFor} from "@/sanity/lib/client";

const Shoes = () => {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function  fetchproduct(){
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProduct(fetchedProduct)
    }

    fetchproduct()
  },[]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {product.map((product) => (
                <div key={product._id}>
                    {product.productName}
                    {product.image && (
                    <Image 
                    src={urlFor(product.image).url()}
                    alt="image"/>
                    )}

                </div>
            ))}
        </div>
    )
}
