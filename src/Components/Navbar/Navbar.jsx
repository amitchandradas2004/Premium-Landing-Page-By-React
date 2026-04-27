import { FaAngleRight } from "react-icons/fa";
import Logo from "../../assets/Vector - 0.png";
const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-[#10113c] via-[#0F0C17]  to-[#290e2f] px-2 md:px-0 py-2 text-white">
      <div className="container mx-auto flex justify-between items-center py-2 border border-gray-600 rounded-2xl px-2">
        <div className="flex items-center gap-2">
          <img src={Logo} />
          <h2 className="text-xl md:text-3xl lg:text-4xl source font-bold">
            IdentityHub
          </h2>
        </div>
        <div className="abeezee flex md:inline-flex hidden items-center gap-3 opacity-80 text-xs">
          <p>Services</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Partners</p>
          <p>About us</p>
        </div>
        <div>
          <button className="flex items-center border border-[#8D1EA2] rounded-xl p-2 text-center text-xs md:text-xl">
            Start Free Trial{" "}
            <span>
              <FaAngleRight />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
