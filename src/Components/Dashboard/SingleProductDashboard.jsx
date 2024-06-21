/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Notify from "../Shared/Notify";

const SingleProductDashboard = ({ appointment, onDelete }) => {
  const { _id, category, PatientName, age, details, image_url } = appointment;

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/patientData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // <Notify text="account deletion successful" />;
        console.log(data);
        onDelete(_id);
      });
  };

  return (
    <div className="w-96 gap-2 bg-base-100 grid grid-cols-1 justify-items-center align-center p-8 shadow-2xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="grid grid-cols-1 justify-items-center align-center mb-5">
        <h2 className="card-title">Name : {PatientName}</h2>
        <p className="font-bold text-xl">Age : {age}</p>
        <p className="font-bold text-xl text-red-400 mb-5">
          Problems Details : {details}
        </p>
        {/* <button className="btn btn-outline font-bold">${price}</button> */}
        <div className="card-actions ">
          <div className="flex flex-wrap gap-2">
            <Link
              className="btn btn-accent text-white"
              to={`patientData/${_id}`}
            >
              Details
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-white"
            >
              Delete
            </button>
            <Link
              className="btn btn-primary text-white"
              to={`patientData/update/${_id}`}
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDashboard;

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, excepturi ipsa. Id, perspiciatis iure corporis sit voluptatem laborum mollitia provident?
