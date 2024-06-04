import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a href="/dashboard/all-products">All Products</a>
          </li>
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
