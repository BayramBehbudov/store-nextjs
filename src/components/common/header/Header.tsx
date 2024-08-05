import Image from 'next/image';
import Navbar from './Navbar';
import Icons from './Icons';
import Burger from './BurgerMenu';

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
   return (
      <header className=" container flex h-[80px] items-center justify-between ">
         <Image
            alt="logo"
            className="flex cursor-pointer items-center sm:w-[150px]"
            width={200}
            height={200}
            src="/logo.svg"
         />
         <div className="h-full md:hidden">
            <Navbar className="h-full items-center" />
         </div>
         <div className="h-full">
            <Icons />
         </div>
         <div className="hidden md:block">
            <Burger />
         </div>
      </header>
   );
};

export default Header;
