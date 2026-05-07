import Check1 from "../../assets/check1.png";
import Check2 from "../../assets/check2.png";
import Check3 from "../../assets/check3.png";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
const Feature = () => {
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
              <span class="items-center flex justify-center bg-black text-white px-5 py-1 rounded-full  transition-all duration-300 group-hover:bg-[#22132a]">
                Feature{" "}
              </span>
            </div>
            <h3 className="font-bold text-5xl text-[#CAD1E9]">
              Why
              <span className="bg-linear-to-t from-[#5e76ed] via-[#E73DC4] to-[#E73DC4] bg-clip-text text-transparent px-3">
                choose
              </span>
              us
            </h3>
            <p className="text-[#CAC6DD] text-xl font-medium">
              We are the only service that provides all 3 <br /> services as a
              packaged service
            </p>
          </div>
          <div className="py-10">
            <div
              className="1 flex flex-col md:flex-row justify-between items-center gap-5 bg-white/5 
              backdrop-blur-md
              border border-white/20
              shadow-xl rounded-3xl  py-10 px-5"
            >
              <div className="left w-full md:w-2/3">
                <h3 className="text-[#1E21E9] text-4xl font-bold">
                  Protect Personal information
                </h3>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center  gap-3">
                    <img src={Check1} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      The first step involves identifying all places where your
                      personal information might be present.
                    </p>
                  </div>
                  <div className="flex items-center  gap-3">
                    <img src={Check1} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Once you've identified where your information is held, the
                      next step is to contact the administrators of this
                      platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check1} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Removing personal information is not a one-time task but
                      requires ongoing vigilance.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check1} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      There are professional services and tools available that
                      specialise in personal information removal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={Image1} className="" />
              </div>
            </div>
            <div
              className="1 flex flex-col md:flex-row justify-between items-center gap-5 my-10  bg-white/5 
              backdrop-blur-md
              border border-white/20 rounded-3xl py-10 px-5"
            >
              <div className="left w-full md:w-2/3">
                <h3 className="text-[#7950FF] text-4xl font-bold">
                  Detailed Reporting
                </h3>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center gap-3">
                    <img src={Check2} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      The first step involves identifying all places where your
                      personal information might be present.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check2} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Once you've identified where your information is held, the
                      next step is to contact the administrators of this
                      platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check2} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Removing personal information is not a one-time task but
                      requires ongoing vigilance.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check2} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      There are professional services and tools available that
                      specialise in personal information removal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={Image2} className="" />
              </div>
            </div>

            <div
              className="1 flex flex-col md:flex-row justify-between items-center gap-5 my-10  bg-white/5 
              backdrop-blur-md
              border border-white/20 rounded-3xl py-10 px-5"
            >
              <div className="left w-full md:w-2/3">
                <h3 className="text-[#098709] text-4xl font-bold">
                  Secure All Data
                </h3>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center gap-3">
                    <img src={Check3} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      The first step involves identifying all places where your
                      personal information might be present.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check3} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Once you've identified where your information is held, the
                      next step is to contact the administrators of this
                      platform
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check3} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      Removing personal information is not a one-time task but
                      requires ongoing vigilance.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Check3} className="w-5" />
                    <p className="text-[#CAC6DD] text-xl">
                      There are professional services and tools available that
                      specialise in personal information removal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={Image3} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
