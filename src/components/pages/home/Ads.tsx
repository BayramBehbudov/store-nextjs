import Image from 'next/image';

interface IAds {}

const Ads: React.FC = (): JSX.Element => {
   return <Image src="/adsBanner.jpg" alt="ads" width={1920} height={576} className="h-auto w-auto rounded-lg" quality={100} />;
};

export default Ads;
