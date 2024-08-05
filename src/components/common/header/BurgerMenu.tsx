import { GiHamburgerMenu } from 'react-icons/gi';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/sheet';
import Navbar from './Navbar';
import Icons from './Icons';
interface Iburger {}

const burger: React.FC = (): JSX.Element => {
   return (
      <Sheet>
         <SheetTrigger className="flex h-full items-center">
            <GiHamburgerMenu size={25} color="#720498" />
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle></SheetTitle>
               <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="mb-[60px]">
               <Icons />
            </div>
            <Navbar className="flex-col gap-2" />
         </SheetContent>
      </Sheet>
   );
};

export default burger;
