import { Outlet } from "react-router-dom";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import { motion } from "framer-motion";

const Homelayout = () => {
  return (
    <div>
      {/* Navbar */}

      <Navbar></Navbar>

      {/* Outlet  */}
      <Outlet />
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Homelayout;
