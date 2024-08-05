import Navbar from '@common/header/Navbar';
import Image from 'next/image';
import Link from 'next/link';

interface IFooter {}

const Footer: React.FC = (): JSX.Element => {
   const navItems = ['Novidades', 'Sneakers', 'Streetwear', 'Fitness Wear', 'Activewear', 'Tecno Wear', 'Eyewear'];
   const navItem = ['sub link', 'sub link', 'sub link', 'sub link', 'sub link'];
   return (
      <footer className="bg-[#EAEAEA]">
         <div className="container flex h-[300px] justify-between py-10">
            <div className="flex h-full flex-col justify-between">
               <Image src="/logo.svg" alt="logo" width={200} height={200} className="cursor-pointer" />
               <p className="text-[12px] ml-7 font-bold text-[#989898]">© 2022. All rights reserved.</p>
            </div>

            <div className={`flex h-full items-center gap-5 sm:h-fit md:flex-col md:gap-2`}>
               {navItems.map((item) => (
                  <div key={item} className="w-[110px] font-bold text-[#720498] sm:text-start">
                     {item}
                     <div className="mt-3 flex flex-col gap-1 md:hidden">
                        {navItem.map((subItem) => (
                           <p className="text-[15px] text-slate-700">{subItem}</p>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
