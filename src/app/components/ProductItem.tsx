import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/Ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/Ui/carousel";

import Link from "next/link";
import { Items } from "@/app/Cart/Data/detail";


interface ProductItemProps {
  product: Items
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="w-full">
          <Link href={`/product/${product.id}`}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden group-hover:opacity-75 transition-opacity">
                  <Image
                    src={product.img}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 space-y-1">
              <h4 className="text-sm font-semibold text-[#9E3500]">Just In</h4>
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.title2}</p>
              <p className="text-sm text-gray-500">Stock: {product.inventry}</p>
              <p className="text-sm text-gray-500">{product.colors} Colour</p>
              <p className="text-sm font-medium">MRP: {product.price}</p>
            </div>
            
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}