'use client';
import Link from 'next/link';
import { useState } from 'react';

interface INavbar {}
interface IClassName {
   className?: string;
}

const Navbar: React.FC<IClassName> = ({ className }): JSX.Element => {
   const [selectItem, setSelectItem] = useState(0);

   const navItems = ['Novidades', 'Sneakers', 'Streetwear', 'Fitness Wear', 'Activewear', 'Tecno Wear', 'Eyewear'];
   return (
      <nav className="relative flex h-full w-fit flex-col items-center  md:h-fit sm:flex-row ">
         <div className={`flex ${className}`}>
            {navItems.map((item) => (
               <Link
                  href={`/`}
                  key={item}
                  onClick={() => setSelectItem(navItems.indexOf(item))}
                  className="w-[110px] text-center font-bold text-[#720498] sm:text-start"
               >
                  {item}
               </Link>
            ))}
         </div>

         <div
            className={`absolute bottom-0 h-0.5 w-[110px] bg-[#720498] sm:hidden`}
            style={{ left: `${selectItem * 110}px`, transition: 'left 0.2s ease-in' }}
         ></div>
      </nav>
   );
};

export default Navbar;
