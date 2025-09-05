import { Heart, Target, Eye } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id='about' className="bg-[#333333] py-20 scroll-mt-20 ">
      <div className="max-w-4xl mx-auto bg-[#404040] rounded-2xl shadow-xl p-8 lg:p-12 border border-[#404040]">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            About <span className="text-[#FF0000]">OKBURN</span>
          </h2> 
          
          <p className="text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            <span className="text-[#FF0000]">OKBURN</span> is not just another token — it's a movement of collective burning power. Inspired by the ethos of decentralization, <span className="text-[#FF0000]">OKBURN</span> puts supply reduction, transparency, and ecosystem growth in the hands of the community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800">
              <div className="bg-[#FF0000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-black" size={24} />
              </div>
              <h3 className="font-semibold text-[#FF0000] mb-2">Mission</h3>
              <p className="text-white text-sm">Align the community around deflationary pressure and meaningful incentives</p>
            </div>
            
            <div className="text-center bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800">
              <div className="bg-[#FF0000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-black" size={24} />
              </div>
              <h3 className="font-semibold text-[#FF0000] mb-2">Vision</h3>
              <p className="text-white text-sm">Become the leading burn-based rewards protocol on XLayer, fueling scarcity and innovation</p>
            </div>
            
            <div className="text-center bg-[#1a1a1a] p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800">
              <div className="bg-[#FF0000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-black" size={24} />
              </div>
              <h3 className="font-semibold text-[#FF0000] mb-2">Core Belief</h3>
              <p className="text-white text-sm">Burning should be verifiable, transparent, and rewarding — not a marketing gimmick</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
