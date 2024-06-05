import { useLoaderData } from "react-router-dom";
import SingleProductDashboard from "./SingleProductDashboard";
import { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://mediquanta-server-1.onrender.com/patientData")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="grid grid-cols-3">
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
