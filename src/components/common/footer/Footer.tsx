import Image from 'next/image';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoLocationSharp, IoLogoInstagram, IoMail, IoShareSocial } from 'react-icons/io5';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialPinterestCircular } from 'react-icons/ti';

const Footer: React.FC = (): JSX.Element => {
   const navItems = ['Novidades', 'Sneakers', 'Streetwear', 'Fitness Wear', 'Activewear', 'Tecno Wear', 'Eyewear'];
   const partners = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];

   return (
      <footer className="bg-[#EAEAEA]">
         <div className="container flex h-[300px] gap-6 py-10">
            <div className="flex h-full flex-col justify-between">
               <Image src="/logo.svg" alt="logo" width={200} height={200} className="cursor-pointer" />
               <div className="flex items-center justify-center gap-2">
                  <IoShareSocial size={30} color="" className="cursor-pointer" />
                  <TiSocialPinterestCircular size={33} color="#E60023" className="cursor-pointer" />
                  <IoLogoInstagram size={30} color="#C13584" className="cursor-pointer" />
                  <FaWhatsapp size={30} color="#28D146" className="cursor-pointer" />
                  <RiFacebookCircleLine size={30} color="#405DE6" className="cursor-pointer" />
               </div>
               <p className="ml-7 text-[12px] font-bold text-[#989898]">© 2022. All rights reserved.</p>
            </div>
            <div className={`ml-16 flex h-full flex-col gap-2 sm:hidden`}>
               <p className="font-bold text-[#720498]">Partners</p>
               {partners.map((item) => (
                  <div key={item} className="w-[110px] text-[14px] sm:text-start">
                     {item}
                  </div>
               ))}
            </div>
            <div className={`flex h-full flex-col gap-2`}>
               <p className="font-bold text-[#720498]">Categories</p>
               {navItems.map((item) => (
                  <div key={item} className="w-[110px] text-[14px] sm:text-start">
                     {item}
                  </div>
               ))}
            </div>
            <div className={`ml-16 flex h-full w-[500px] flex-col gap-2 xs:hidden`}>
               <p className="font-bold text-[#720498]">About us</p>
               <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, officiis ex voluptate
                  necessitatibus doloribus magni
               </span>
               <span className="flex items-center gap-3">
                  <FaPhone size={20} color="#720498" /> +123 456 789
               </span>
               <span className="flex items-center gap-3">
                  <IoMail size={20} color="#720498" /> H8S9A@example.com
               </span>
               <span className="flex items-center gap-3">
                  <IoLocationSharp size={20} color="#720498" /> 123 Main Street, Anytown USA 12345
               </span>
            </div>{' '}
         </div>
      </footer>
   );
};

export default Footer;
