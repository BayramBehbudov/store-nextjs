import Image from 'next/image';

const BestSellers: React.FC = (): JSX.Element => {
   const items = ['Shoes', 'Sweatshirt', 'T-Shirt', 'NBA', 'Cap', 'T-Shirt', 'NBA', 'Cap'];
   return (
      <div className="flex w-full gap-10 overflow-scroll pb-4">
         {items.map((item) => (
            <div key={item} className="flex w-fit flex-col items-center gap-2">
               <Image src={`/best/${item}.svg`} alt="img" width={180} height={180} className="h-auto min-w-[180px]" />
               <p>{item}</p>
            </div>
         ))}
      </div>
   );
};

export default BestSellers;
