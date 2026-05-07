// import React from 'react';
import BoyImage from "../../assets/boyimage.png";
const Testimonials = () => {
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
                Testimonials{" "}
              </span>
            </div>
            <h3 className="font-bold text-5xl text-[#CAD1E9]">
              What’s our user
              <span className="bg-linear-to-t from-[#5e76ed] via-[#E73DC4] to-[#E73DC4] bg-clip-text text-transparent px-3">
                says
              </span>
              about us
            </h3>
          </div>

          <div
            className=" bg-white/2
              backdrop-blur-md
              border border-white/10 rounded-2xl p-5 mt-10"
          >
            <div
              className=" bg-white/1 
              backdrop-blur-md
              border border-white/10 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2">
                <img src={BoyImage} className="w-15" />
                <div className="font-bold">
                  <h3 className="text-2xl">Amit Das</h3>
                  <h3 className="text-[#9D9BA6]">Student . 1 day ago</h3>
                </div>
              </div>
              <div className="pl-15 pt-5">
                <p className="text-[#9D9BA6]">
                  Forget about spam, advertising mailings, hacking and attacking
                  robots. Keep your real mailbox clean and secure. Temp Mail
                  provides temporary, secure, anonymous, free, disposable email
                  address. Stalkers and disgruntled acquaintances use the
                  Internet to find addresses, phone numbers and other personal
                  details about their targets. Identity thieves use personal
                  information numbers and other personal details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
