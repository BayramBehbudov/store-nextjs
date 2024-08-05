import Image from 'next/image';

interface IBestSellers {
   title?: string;
   element: JSX.Element;
}

const BestSellers: React.FC<IBestSellers> = ({ title, element }): JSX.Element => {
   const items = ['Shoes', 'Sweatshirt', 'T-Shirt', 'NBA', 'Cap', 'T-Shirt', 'NBA', 'Cap'];
   return (
      <section className="flex h-fit w-full flex-col gap-7">
         {title && (
            <h1 className="flex h-12 w-fit items-center gap-2 font-bold">
               <p className="h-[25px] w-2 bg-[#60DA00]"></p>
               {title}
            </h1>
         )}
         {element}
      </section>
   );
};

export default BestSellers;
