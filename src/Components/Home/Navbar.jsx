import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold">Products</Link>
            </li>

            <li>
              <Link className="font-bold">Dashboard</Link>
            </li>
            <li>
              <Link className="font-bold">Reviews</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl font-bold">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-bold">Appointment</Link>
          </li>

          <li>
            <Link className="font-bold">About</Link>
          </li>
          <li>
            <Link className="font-bold">Dashboard</Link>
          </li>
          <li>
            <Link className="font-bold">Reviews</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="font-bold btn">
          <IoMdLogOut />
        </Link>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
