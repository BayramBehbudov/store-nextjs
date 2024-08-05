'use client';
import { useEffect, useState } from 'react';

interface IBanner {}

const Banner: React.FC = (): JSX.Element => {
   const [banner, setBanner] = useState(0);
   console.log(banner);

   const banners = [
      'Shop the Latest Trends Online – Fashion Delivered Right to Your Door!',
      'Discover Your Perfect Look – Stylish Clothes Available Now Online!',
      'Find Your Fashion Favorites – Shop Our Online Clothing Store Today!',
      'Elevate Your Wardrobe – Explore Our Online Fashion Boutique!',
   ];

   useEffect(() => {
      const timer = setTimeout(() => {
         setBanner(banner === banners.length - 1 ? 0 : banner + 1);
      }, 3000);
      return () => clearTimeout(timer);
   }, [banner]);

   return (
      <div className="flex h-14 items-center justify-center bg-[#F7F7F7]">
         <div className="container w-fit animate-rotate-x animate-duration-[3000ms] animate-infinite text-[#60DA00]">
            {banners[banner]}
            
         </div>
      </div>
   );
};

export default Banner;
