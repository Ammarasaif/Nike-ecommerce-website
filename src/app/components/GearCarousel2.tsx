import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/Ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/Ui/carousel";
import Link from "next/link"
import { gear2 } from "@/app/Cart/Data/detail";

export function GearCarousel2() {
  return (
    <div className="w-full flex justify-center md:justify-start">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-[509px] overflow-hidden"
      >
        <CarouselContent>
          {gear2.map((item) => (
            <CarouselItem key={item.id} className="lg:basis-1/2 md:basis-1/2 w-full ">
              <Link href={""}>
                <div className="p-1">
                  <Card>
                    <CardContent className="bg-[#F5F5F5] aspect-square group">
                      <Image src={item.img} alt={"shoes"} width={440} height={440} />
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-between mx-2 mt-8">
                  <h1 className="font-bold text-sm">{item.title}</h1>
                  <h2 className="font-semibold text-sm">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm">{item.title2}</h3>
                <div className="ml-2 text-sm md:text-base">Stock:{item.inventry}</div>
                <div className="ml-2 text-sm md:text-base">color:{item.colors}</div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
   
      <div className="absolute bottom-[390px] w-[300px] h-[393px] left-12 md:bottom-[430px] md:right-14 right-14 lg:bottom-[310px] xl:bottom-[380px]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      </Carousel>
    </div>
  )
}