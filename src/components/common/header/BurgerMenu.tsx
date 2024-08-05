import { GiHamburgerMenu } from 'react-icons/gi';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/sheet';
import Navbar from './Navbar';
interface Iburger {}

const burger: React.FC = (): JSX.Element => {
   return (
      <Sheet>
         <SheetTrigger className="flex h-full items-center">
            <GiHamburgerMenu size={35} color="#720498" />
         </SheetTrigger>
         <SheetContent className="border-none">
            <SheetHeader>
               <SheetTitle></SheetTitle>
               <SheetDescription></SheetDescription>
            </SheetHeader>
            <Navbar className="flex-col gap-2" />
         </SheetContent>
      </Sheet>
   );
};

export default burger;
