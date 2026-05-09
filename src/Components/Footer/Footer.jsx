import {
  FaFacebook,
  FaInstagramSquare,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../../assets/Vector - 0.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-2 md:px-0">
        {/* glowing */}
        <div className="relative  text-white items-center justify-center overflow-hidden py-10 container mx-auto">
          {/* <!-- Glow layer --> */}
          <div className="absolute w-100 h-150 bg-purple-700 rounded-full blur-[120px] opacity-40 top-20 left-1/3"></div>
          {/* Content */}
          <div className="flex flex-col justify-center items-center space-y-3 text-center">
            <h3 className="font-bold text-5xl text-[#CAD1E9]">
              Be part of the future of
              <span className="bg-linear-to-t from-[#5e76ed] via-[#E73DC4] to-[#E73DC4] bg-clip-text text-transparent px-3">
                IdentityHub
              </span>
            </h3>
            <p className="text-[#CAC6DD] text-xl">
              Unleash the power of AI within Brainwave. Upgrade your <br />
              productivity with Brainwave, the open AI chat app.
            </p>

            <button className="group relative inline-flex items-center justify-center p-0.25 rounded-xl bg-linear-to-r from-blue-500 to-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              <span className="px-6 py-2 rounded-xl bg-[#1a0f1f] text-white font-medium transition-all duration-300 group-hover:bg-[#22132a]">
                {" "}
                Start free trial
              </span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center py-5 space-y-4">
            <div className="flex items-center gap-2">
              <img src={Logo} />
              <h2 className="text-xl md:text-3xl lg:text-4xl source font-bold">
                IdentityHub
              </h2>
            </div>
            <div className="flex items-center gap-5 text-xl">
              <a href="#feature">features</a>
              <a href="#">
                <p>Services</p>
              </a>
              <a href="#">
                <p>pricing</p>
              </a>
              <a href="#">
                <p>how to use</p>
              </a>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 space-y-4">
            <span>
              <p>© identityhub 2024. All rights reserved</p>
            </span>
            <div className="flex items-center gap-5">
              <span className=" p-3 rounded-full bg-gray-900">
                <FaTwitter />
              </span>
              <span className="  p-3 rounded-full   bg-gray-900">
                <FaInstagramSquare />
              </span>
              <span className="  p-3 rounded-full  bg-gray-900">
                <FaTelegram />
              </span>
              <span className="  p-3 rounded-full bg-gray-900">
                <FaFacebook />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
