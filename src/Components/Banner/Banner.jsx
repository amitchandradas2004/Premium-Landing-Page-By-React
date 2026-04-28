import BannerImage from "../../assets/Hero.png";
import Icon1 from "../../assets/protect-icon.png";
import Icon2 from "../../assets/call-icon.png";
import Icon3 from "../../assets/Box.png";
import Icon4 from "../../assets/email-icon.png";
const Banner = () => {
  return (
    <div className="bg-black">
      {/* glowing */}
      <div class="relative  text-white items-center justify-center overflow-hidden py-10 container mx-auto">
        {/* <!-- Glow layer --> */}
        <div class="absolute w-100 h-150 bg-purple-700 rounded-full blur-[120px] opacity-40 top-20 left-1/3"></div>
        {/* <!-- Content --> */}
        <div class="relative z-10 text-center space-y-8 md:space-y-4 px-2 md:px-0">
          <button class="p-0.25 border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]">
            <span class="flex items-center flex bg-black text-white px-5 py-1 rounded-full abeezee transition-all duration-300 group-hover:bg-[#22132a]">
              Secure your data{" "}
            </span>
          </button>
          <h3 className="abeezee text-6xl font-bold ">
            <span className="bg-linear-to-t from-[#F33CC0] to-[#4349FF] bg-clip-text text-transparent">
              Identity-hub is a better way to <br />
            </span>{" "}
            <span className="bg-linear-to-t from-[#5e76ed] via-[#4349FF] to-[#4349FF] bg-clip-text text-transparent">
              achieve privacy
            </span>
          </h3>
          <p className="abeezee text-2xl font-medium opacity-80">
            Make your data invisible by generating unlimited identities. <br />
            The next-level in privacy protection for online and travel.
          </p>
          <div className="space-x-2">
            <button class="group relative inline-flex items-center justify-center p-0.25 rounded-xl bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              <span class="px-6 py-2 rounded-xl bg-[#1a0f1f] text-white font-medium transition-all duration-300 group-hover:bg-[#22132a]">
                Start free trial
              </span>
            </button>
            <button class="px-6 py-2 rounded-xl text-white font-medium  bg-linear-to-r from-[#090EDB] to-[#DA24BB] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
              Use it Now
            </button>
          </div>
        </div>
        <div className="py-10 relative">
          <img src={BannerImage} className="w-80 mx-auto" />
          <div
            className="absolute top-10 md:left-2 lg:left-25 flex items-center gap-2 border border-gray-800 rounded-2xl p-2 w-60 bg-white/10 backdrop-blur-md duration-300 ease-out
            hover:scale-102 shadow-xs shadow-pink-400 select-none transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] hidden md:inline-flex"
          >
            <div>
              <img src={Icon1} />
            </div>
            <div className="text-[#CAC6DD] font-medium">
              <h4>One-time passcode</h4>
              <h4>Kas3345-r32</h4>
            </div>
          </div>
          <div
            className="absolute top-10 md:right-5 lg:right-25 flex items-center gap-2 border border-gray-800 rounded-2xl p-2 w-60 bg-white/10 backdrop-blur-md duration-300 ease-out
            hover:scale-102 shadow-xs shadow-pink-400 select-none transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]  hidden md:inline-flex"
          >
            <div>
              <img src={Icon2} />
            </div>
            <div className="text-[#CAC6DD] font-medium">
              <h4>Phone numbers</h4>
              <h4>+1 (456) 453-3456</h4>
            </div>
          </div>
          <div
            className="absolute bottom-10 md:left-5 lg:left-25 flex items-center gap-2 border border-gray-800 rounded-2xl p-2 w-60 bg-white/10 backdrop-blur-md duration-300 ease-out
            hover:scale-102 shadow-xs shadow-pink-400 select-none transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]  hidden md:inline-flex"
          >
            <div>
              <img src={Icon3} />
            </div>
            <div className="text-[#CAC6DD] font-medium">
              <h4>Credit card</h4>
              <h4>123 456 789 1243</h4>
            </div>
          </div>
          <div
            className="absolute bottom-10 md:right-5 lg:right-25 flex items-center gap-2 border border-gray-800 rounded-2xl p-2 w-60 bg-white/10 backdrop-blur-md duration-300 ease-out
            hover:scale-102 shadow-xs shadow-pink-400 select-none transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]  hidden md:inline-flex"
          >
            <div>
              <img src={Icon4} />
            </div>
            <div className="text-[#CAC6DD] font-medium">
              <h4>Email address</h4>
              <h4>davidjx@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
