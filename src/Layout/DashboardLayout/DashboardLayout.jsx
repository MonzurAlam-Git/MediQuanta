import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Components/Shared/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
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
          <div className="flex-1 px-2 mx-2 font-bold">
            <Link to="/">
              <span className="bg-red-500 p-2">Medi</span> Quanta
            </Link>
          </div>
          {/* <div className="flex-none hidden lg:block"> */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-bold">
              {/* Sidebar content here */}
              {/* <li>
            <a href="/dashboard/all-products">All Products</a>
          </li> */}
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href={`/profile/${user?.email}`}>Profile</a>
              </li>
              <li>
                <a href="/dashboard/customize-product">Customize HealthCare</a>
              </li>

              <li>
                <a href="/dashboard/all-appointment">All Appointment</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {/* Sidebar content here */}
          {/* <li>
            <a href="/dashboard/all-products">All Products</a>
          </li> */}
          <li>
            <a href="/dashboard/customize-product">Customize HealthCare</a>
          </li>
          <li>
            <a href="/dashboard/all-appointment">All Appointment</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
