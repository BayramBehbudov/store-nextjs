'use client';
import { Carousel, CarouselContent, CarouselItem } from '@ui/carousel';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Example() {
   return (
      <Carousel
         plugins={[
            Autoplay({
               delay: 3000,
            }),
         ]}
      >
         <CarouselContent>
            <CarouselItem className="flex h-[400px] w-full items-center justify-between bg-yellow-200 px-10 sm:justify-center">
               <Image
                  src="/banner/bigsale.png"
                  alt="img"
                  width={300}
                  height={300}
                  className="h-auto max-h-[300px] w-auto"
                  quality={100}
               />
               <div className="flex flex-col items-center gap-4 sm:hidden">
                  <h1 className="animate-pulse text-3xl font-bold text-[#720498] animate-infinite sm:text-xl">
                     A great opportunity to save your budget
                  </h1>
                  <button className="w-fit bg-red-500 px-4 py-2 text-white">Shop Now</button>
               </div>
               <Image
                  src="/banner/2.png"
                  alt="img"
                  width={300}
                  height={300}
                  className="h-full w-auto max-w-[20%] sm:hidden"
                  quality={100}
               />
            </CarouselItem>
            <CarouselItem className="flex h-[400px] w-full items-center justify-between bg-violet-400 px-10  sm:justify-center">
               <Image
                  src="/banner/1.webp"
                  alt="img"
                  width={500}
                  height={500}
                  className="h-full w-auto sm:hidden"
                  quality={100}
               />
               <div className="flex flex-col items-center gap-4 sm:hidden">
                  <h1 className="animate-pulse text-3xl font-bold text-green-700 animate-infinite">
                     A great opportunity to save your budget
                  </h1>
                  <button className="w-fit bg-red-800 px-4 py-2 text-white">Shop Now</button>
               </div>
               <Image
                  src="/banner/bigsale.png"
                  alt="img"
                  width={300}
                  height={300}
                  className="h-auto max-h-[300px] w-auto sm:hidden"
                  quality={100}
               />
               <Image
                  src="/banner/2.png"
                  alt="img"
                  width={500}
                  height={500}
                  className="hidden h-full w-auto  sm:block"
                  quality={100}
               />
            </CarouselItem>
         </CarouselContent>
      </Carousel>
   );
}
