import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard_home from "./Dashboard_home";
// import "./dashboard.css";

const Dashboard_App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Dashboard_home />
    </div>
  );
};

export default Dashboard_App;
