import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const ServicesWeOffer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mediquanta-server-1.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="p-10">
      <h1 className=" mt-4 text-2xl text-center font-bold">
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
          className="text-xl lg:text-3xl font-semibold  md:text-center opacity-70 text-white"
        >
          Services{" "}
          <span className="font-bold text-red-500 mx-5">
            M E D I Q U A N T A{" "}
          </span>{" "}
          Offers
        </motion.h3>
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center ">
        {services.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
