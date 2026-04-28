const Banner = () => {
  return (
    <div>
      {/* glowing */}
      <div class="relative bg-black text-white flex items-center justify-center overflow-hidden py-10">
        {/* <!-- Glow layer --> */}
        <div class="absolute w-[500px] h-[500px] bg-purple-700 rounded-full blur-[120px] opacity-40 top-[-100px] left-1/1.5"></div>
        {/* <!-- Content --> */}
        <div class="relative z-10 text-center space-y-8 md:space-y-4 px-2 md:px-0">
          <button class="p-0.25 border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]">
            <span class="flex items-center block bg-black text-white px-5 py-1 rounded-full abeezee transition-all duration-300 group-hover:bg-[#22132a]">
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
            <button class="group relative inline-flex items-center justify-center p-0.25 rounded-xl bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]">
              <span class="px-6 py-2 rounded-xl bg-[#1a0f1f] text-white font-medium transition-all duration-300 group-hover:bg-[#22132a]">
                Start free trial
              </span>
            </button>
            <button class="px-6 py-2 rounded-xl text-white font-medium  bg-linear-to-r from-[#090EDB] to-[#DA24BB] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]">
              Use it Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
