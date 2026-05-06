// import React from "react";
import MarkImage from "../../assets/mark.png";
const Pricing = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-2 md:px-0">
        {/* glowing */}
        <div className="relative  text-white items-center justify-center overflow-hidden py-10 container mx-auto">
          {/* <!-- Glow layer --> */}
          <div className="absolute w-100 h-150 bg-purple-700 rounded-full blur-[120px] opacity-40 top-20 left-1/3"></div>
          {/* Content */}
          <div className="flex flex-col justify-center items-center space-y-3 text-center">
            <div class="p-0.25 border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] w-30 mx-auto select-none">
              <span class="items-center flex justify-center bg-black text-white px-5 py-1 rounded-full transition-all duration-300 group-hover:bg-[#22132a]">
                Pricing{" "}
              </span>
            </div>
            <h3 className="font-bold text-5xl text-[#CAD1E9]">
              Our
              <span className="bg-linear-to-t from-[#5e76ed] via-[#E73DC4] to-[#E73DC4] bg-clip-text text-transparent px-3">
                Pricing
              </span>
              Package
            </h3>
          </div>
          {/* Pricing Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-20">
            <div className="card-1 border border-gray-800 py-10 px-5 backdrop-blur-2xl space-y-5 rounded-3xl">
              <h4 className="text-5xl font-bold">Basic</h4>
              <p className="text-[#CAC6DD]  text-xl">
                AI chatbot, personalized recommendations
              </p>
              <h3 className="text-6xl font-bold">
                $<span className="text-8xl">0</span>
              </h3>
              <button className="group w-full inline-flex items-center justify-center p-0.25 rounded-xl bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]">
                <span className="px-6 py-2 rounded-xl bg-[#1a0f1f] text-white font-medium transition-all duration-300 group-hover:bg-[#22132a] w-full">
                  Get Started
                </span>
              </button>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <img src={MarkImage} className="w-6" />
                  <h4 className="text-[#CAC6DD] text-xl">Type of threat</h4>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                  <img src={MarkImage} className="w-6" />
                  <h4 className="text-[#CAC6DD] text-xl">Online presence</h4>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                  <img src={MarkImage} className="w-6" />
                  <h4 className="text-[#CAC6DD] text-xl">
                    Access to all modules
                  </h4>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                  <img src={MarkImage} className="w-6" />
                  <h4 className="text-[#CAC6DD] text-xl">Notability</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
