import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const ServicesWeOffer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mt-10">
        Services We OFFER
      </h1>
      <div className="mt-10 grid grid-cols-3 gap-2 justify-items-center">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
