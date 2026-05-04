// import React from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
const Service = () => {
  return (
    <div className="bg-black py-10 px-2 md:px-0">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        <div>
          {/* <!-- Gradient Border --> */}
          <div className="rounded-3xl p-px bg-linear-to-r from-purple-500 via-indigo-500 to-pink-500">
            {/* <!-- Card --> */}
            <div className="relative rounded-3xl bg-linear-to-br from-[#0b0b1a] via-[#0f0f2a] to-[#050510] p-8 overflow-hidden">
              {/* <!-- Glow Effect --> */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.5),transparent_60%)]"></div>

              {/* <!-- Content --> */}
              <div className="relative z-10 space-y-3">
                <img src={Icon1} className="w-10" />
                <h3 className="text-3xl font-bold">
                  Personal Information removal
                </h3>

                <p className="text-[#CAC6DD] font-medium text-xl">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>

                <button class="flex items-center gap-2 text-white font-medium">
                  Explore More
                  <span>▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Gradient Border --> */}
          <div className="rounded-3xl p-px bg-linear-to-r from-purple-500 via-indigo-500 to-pink-500">
            {/* <!-- Card --> */}
            <div className="relative rounded-3xl bg-linear-to-br from-[#0b0b1a] via-[#0f0f2a] to-[#050510] p-8 overflow-hidden">
              {/* <!-- Glow Effect --> */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.5),transparent_60%)]"></div>

              {/* <!-- Content --> */}
              <div className="relative z-10 space-y-3">
                <img src={Icon2} className="w-10" />
                <h3 className="text-3xl font-bold">Cloaking Alias Profiles</h3>

                <p className="text-[#CAC6DD] font-medium text-xl">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>

                <button class="flex items-center gap-2 text-white font-medium">
                  Explore More
                  <span>▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Gradient Border --> */}
          <div className="rounded-3xl p-px bg-linear-to-r from-purple-500 via-indigo-500 to-pink-500">
            {/* <!-- Card --> */}
            <div className="relative rounded-3xl bg-linear-to-br from-[#0b0b1a] via-[#0f0f2a] to-[#050510] p-8 overflow-hidden">
              {/* <!-- Glow Effect --> */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.5),transparent_60%)]"></div>

              {/* <!-- Content --> */}
              <div className="relative z-10 space-y-3">
                <img src={Icon3} className="w-10" />
                <h3 className="text-3xl font-bold">
                  Virtual identities Security
                </h3>

                <p className="text-[#CAC6DD] font-medium text-xl">
                  Lets users quickly find answers to their questions without
                  having to search through multiple sources.
                </p>

                <button class="flex items-center gap-2 text-white font-medium">
                  Explore More
                  <span>▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
