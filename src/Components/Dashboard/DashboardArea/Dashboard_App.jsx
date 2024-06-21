import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard_home from "./Dashboard_home";
import "./dashboard.css";

const Dashboard_App = () => {
  return (
    <div className="grid-container">
      <Dashboard_home />
    </div>
  );
};

export default Dashboard_App;
