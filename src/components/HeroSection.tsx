import WalletBar from "./WalletBar";

const HeroSection = () => {
  return (
    <section className="bg-[#333333] py-20 lg:py-28">
      <div className='rounded-2xl shadow-xl p-8 lg:p-12 border border-[#404040] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#404040]'>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-[#EC271E] mb-6 leading-tight">
            <span className="flex items-center justify-center mr-20">
              <img src="./Logo.png" alt="Logo" className='h-55 w-auto mt-2.5' />
              OKBURN 
            </span>
          </h1>
          
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            The community-driven burn protocol on XLayer (OKX Chain). Every action of the community is aligned with one mission: reduce supply, increase scarcity, and reward those who commit to burning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <div className="flex justify-center">
              <WalletBar />
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default HeroSection;