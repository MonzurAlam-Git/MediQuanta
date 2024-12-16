import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { _id, title, description, icon } = service;
  return (
    <div className="card w-96 shadow-xl mb-5 rounded-3xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={"/dashboard/customize-product"}>Booking</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
