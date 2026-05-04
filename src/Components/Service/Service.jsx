import React from "react";

const Service = () => {
  return (
    <div className="bg-black py-10">
      <div className="text-center space-y-4">
        <div class="p-0.25 border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] w-30 mx-auto">
          <span class="items-center flex justify-center bg-black text-white px-5 py-1 rounded-full abeezee transition-all duration-300 group-hover:bg-[#22132a]">
            Services{" "}
          </span>
        </div>
        <h3 className="font-bold text-5xl text-[#CAD1E9]">
          See our services for <br /> secure your{" "}
          <span className="bg-linear-to-t from-[#5e76ed] via-[#4349FF] to-[#4349FF] bg-clip-text text-transparent">
            Data
          </span>
        </h3>
        <p className="text-[#CAC6DD] text-xl font-medium">
          Make your data invisible by generating unlimited identities. <br />
          The next-level in privacy protection for online and travel.
        </p>
      </div>
    </div>
  );
};

export default Service;
