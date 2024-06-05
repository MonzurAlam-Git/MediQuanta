/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Notify from "../Shared/Notify";

const SingleProductDashboard = ({ appointment }) => {
  const { _id, category, PatientName, age, details, image_url } = appointment;

  const handleDelete = async (id) => {
    await fetch(`https://mediquanta-server-1.onrender.com/patientData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // <Notify text="account deletion successful" />;
        console.log(data);
        // onDelete(_id);
      });
  };

  return (
    <div className="card card-compact w-48  bg-base-100 shadow-xl m-5">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {PatientName}</h2>
        <p>Age : {age}</p>
        <p>Details : {details}</p>
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
