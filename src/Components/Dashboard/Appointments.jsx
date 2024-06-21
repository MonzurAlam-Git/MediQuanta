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

  const handleDeleteappointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment._id !== id)
    );
  };

  return (
    <div className="container flex flex-wrap mx-auto align-center justify-center">
      {appointments.map((appointment) => (
        <SingleProductDashboard
          key={appointment._id}
          appointment={appointment}
          onDelete={handleDeleteappointment}
        ></SingleProductDashboard>
      ))}
    </div>
  );
};

export default Appointments;
