import Image from 'next/image';

interface ISpecial {}

const Special: React.FC = (): JSX.Element => {
   const items = [1, 2, 3, 4];
   return (
      <div className="flex w-full justify-between gap-10 overflow-scroll pb-4 sm:justify-start">
         {items.map((item) => (
            <div className="h-auto w-[300px]">
               <Image src={`/special/special${item}.svg`} alt="img" width={300} height={300} className=' min-w-[300px]'/>
               <div className="mt-4 flex flex-col gap-2">
                  <h2 className="w-full font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                  <span className="text-[15px] text-[#989898] line-through">$555.55</span>
                  <p className="text-[17px] font-bold text-[#AF15E5]">$333.33</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Special;
