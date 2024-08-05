import { FaHeart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { PiShoppingBagOpenFill } from 'react-icons/pi';

interface IIcons {}

const Icons: React.FC = (): JSX.Element => {
   return (
      <div className="flex h-full items-center gap-5 sm:h-fit">
         <FaHeart color="#60DA00" size={35} className="cursor-pointer" />
         <PiShoppingBagOpenFill color="#60DA00" size={35} className="cursor-pointer" />
         <div className="flex h-full w-fit cursor-pointer items-center gap-2">
            <FaUserLarge color="#60DA00" size={35} className="cursor-pointer" />
            <div>
               <p className="text-[14px] font-bold text-[#720498]">First Name</p>
               <p className="text-[14px] font-bold text-[#60DA00]">Last Name</p>
            </div>
         </div>
      </div>
   );
};

export default Icons;
