import logo from "../../../assets/logo.png";
import { BsCoin } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-h-16 border-2 mt-6 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Shedules</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="max-h-14" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Shedules</a>
              </li>
            </ul>
          </div>
          <a className="md:ml-10 btn btn-outline">
            0 Coin{" "}
            <BsCoin className="text-[#FDD835] bg-[#DB6704] rounded-full " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
