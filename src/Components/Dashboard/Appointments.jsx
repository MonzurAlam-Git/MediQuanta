import { useLoaderData } from "react-router-dom";
import SingleProductDashboard from "./SingleProductDashboard";

const Appointments = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-3">
      {data.map((appointment) => (
        <SingleProductDashboard
          key={appointment.id}
          appointment={appointment}
        ></SingleProductDashboard>
      ))}
    </div>
  );
};

export default Appointments;
