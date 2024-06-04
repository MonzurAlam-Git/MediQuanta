import React from "react";
import { useLoaderData } from "react-router-dom";

const AppointmentDetails = () => {
  const { _id, category, PatientName, age, details, image_url } =
    useLoaderData();
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Appointment Details</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{PatientName}</h1>
            <p className="py-6">{age}</p>
            <p className="py-6">{category}</p>
            <p className="py-6">{details}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
