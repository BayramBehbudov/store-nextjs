import { Button } from '@ui/button';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface IFeatured {}

const Featured: React.FC = (): JSX.Element => {
   const items = [1, 2, 3];
   return (
      <div className="flex w-full justify-between gap-10 pb-4 overflow-scroll sm:justify-start">
         {items.map((item) => (
            <div key={item} className="relative flex w-fit flex-col items-center gap-2">
               <Image
                  src={`/featured/featured${item}.svg`}
                  alt="img"
                  width={400}
                  height={500}
                  className="h-auto min-w-[180px]"
               />
               <Button variant="featured" className='flex gap-3 items-center hover:gap-4'>
                  Shop Now <FaArrowRight size={17} />
               </Button>
            </div>
         ))}
      </div>
   );
};

export default Featured;
