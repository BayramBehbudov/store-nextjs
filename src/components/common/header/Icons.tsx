import { FaHeart } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { PiShoppingBagOpenFill } from 'react-icons/pi';

interface IIcons {}

const Icons: React.FC = (): JSX.Element => {
   return (
      <div className="flex h-full items-center gap-5 pr-3">
         <FaHeart size={35} className="cursor-pointer text-[#60DA00] md:text-[#720498]" />
         <PiShoppingBagOpenFill size={35} className="cursor-pointer text-[#60DA00] md:text-[#720498]" />
         <FaUserLarge size={35} className="cursor-pointer text-[#60DA00] md:text-[#720498]" />
      </div>
   );
};

export default Icons;
