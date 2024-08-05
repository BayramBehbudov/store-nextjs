import { NextPage } from 'next';
import Carousel from '@pages/home/Carousel';
import BestSellers from '@pages/home/BestSellers';
import Section from '@pages/home/Section';
import Featured from '@pages/home/Featured';
import Special from '@pages/home/Special';
import Ads from '@pages/home/Ads';
const Home: NextPage = () => {
   return (
      <main>
         <Carousel />
         <div className="container mt-7 mb-10 flex w-full flex-col gap-20">
            <Section title="Best Sellers" element={<BestSellers />} />
            <Section title="Featured Looks" element={<Featured />} />
            <Section title="Special offers" element={<Special />} />
            <Section element={<Ads />} />
         </div>
      </main>
   );
};

export default Home;
