const Feature = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        {/* glowing */}
        <div className="relative  text-white items-center justify-center overflow-hidden py-10 container mx-auto">
          {/* <!-- Glow layer --> */}
          <div className="absolute w-100 h-150 bg-purple-700 rounded-full blur-[120px] opacity-40 top-20 left-1/3"></div>
          {/* Content */}
          <div className="flex flex-col justify-center items-center space-y-3 text-center">
            <div class="p-0.25 border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] w-30 mx-auto select-none">
              <span class="items-center flex justify-center bg-black text-white px-5 py-1 rounded-full abeezee transition-all duration-300 group-hover:bg-[#22132a]">
                Feature{" "}
              </span>
            </div>
            <h3 className="font-bold text-5xl text-[#CAD1E9]">
              Why
              <span className="bg-linear-to-t from-[#5e76ed] via-[#4349FF] to-[#4349FF] bg-clip-text text-transparent px-3">
                choose
              </span>
              us
            </h3>
            <p className="text-[#CAC6DD] text-xl font-medium">
              We are the only service that provides all 3 <br /> services as a
              packaged service
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Feature;
