import { Link } from "react-router-dom";

const SingleProductDashboard = ({ appointment }) => {
  const { _id, category, PatientName, age, details, image_url } = appointment;

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
            <Link className="btn btn-accent text-white" to={`/shoes/${_id}`}>
              Details
            </Link>
            <button className="btn btn-error text-white">Delete</button>
            <Link className="btn btn-primary text-white" to={`update/${_id}`}>
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
