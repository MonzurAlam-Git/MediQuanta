import { useLoaderData } from "react-router-dom";

const AppointmentDetails = () => {
  const fetchData = useLoaderData();
  const { category, PatientName, age, details, image_url } = fetchData;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Name : {PatientName}</h1>
          <h1 className="text-2xl font-bold">Age : {age}</h1>
          <h1 className="text-xl font-bold">Problem Category : {category}</h1>

          <p className="py-6">{details}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
