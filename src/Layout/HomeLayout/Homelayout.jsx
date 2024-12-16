import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import { ThemeContext } from "../../Context";

const Homelayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Outlet  */}
        <Outlet />
        {/* Footer */}
        <Footer></Footer>
      </ThemeContext.Provider>
    </div>
  );
};

export default Homelayout;
