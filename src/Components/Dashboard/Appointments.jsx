import { useLoaderData } from "react-router-dom";
import SingleProductDashboard from "./SingleProductDashboard";
import { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/patientData")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="container flex mx-auto align-center justify-center">
      {appointments.map((appointment) => (
        <SingleProductDashboard
          key={appointment._id}
          appointment={appointment}
        ></SingleProductDashboard>
      ))}
    </div>
  );
};

export default Appointments;
