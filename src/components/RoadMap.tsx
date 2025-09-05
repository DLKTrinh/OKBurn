const Roadmap = () => {
  return (
    <section id="roadmap" className="scroll-mt-5 bg-[#333333] py-20 flex items-center justify-center flex-col gap-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-red-400 to-gray-300 bg-clip-text text-transparent">
        Roadmap
      </h2>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <img 
          src="./roadmap.png" 
          alt="Roadmap" 
          className="rounded-2xl shadow-lg max-w-full h-auto"
        />

      </div>
    </section>
  );
};

export default Roadmap;
