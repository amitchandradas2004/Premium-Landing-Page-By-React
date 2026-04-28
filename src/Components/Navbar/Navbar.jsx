import { FaAngleRight } from "react-icons/fa";
import Logo from "../../assets/Vector - 0.png";
const Navbar = () => {
  return (
    <nav className="px-2 md:px-0 py-2 text-white">
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
        <div className="hidden md:inline-block">
          <button class="p-0.25 btn border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-xl">
            <span class="flex items-center block bg-black text-white px-4 py-2 rounded-xl">
              Start Free Trial{" "}
              <span>
                <FaAngleRight />
              </span>
            </span>
          </button>
        </div>
        {/* sidebar */}
        <div className="inline-block md:hidden">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-50 p-4">
              {/* Sidebar content here */}
              <li className="text-black">
                <a>
                  {" "}
                  <button> Services</button>
                </a>
                <a>
                  {" "}
                  <button>Features</button>
                </a>
                <a>
                  {" "}
                  <button>Pricing</button>
                </a>
                <a>
                  {" "}
                  <button>Partners</button>
                </a>
                <a>
                  {" "}
                  <button>About us</button>
                </a>
                <a>
                  <button class="p-0.25 btn border-none bg-linear-to-r from-blue-500 to-purple-500 rounded-xl">
                    <span class="flex items-center block bg-black text-white px-4 py-2 rounded-xl">
                      Start Free Trial{" "}
                      <span>
                        <FaAngleRight />
                      </span>
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
