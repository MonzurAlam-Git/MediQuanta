const Review = ({ review }) => {
  const { id, img, name, age, rvw, location, rating, date } = review;
  return (
    <div className="carousel-item w-48">
      <div className="card lg:card-side bg-base-100 border-2 p-10 mb-5">
        <figure>
          <img className="w-60" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-indigo-400">{name}</h2>
          <h2 className="font-bold">Age : {age}</h2>
          <h2 className="font-bold">location : {location}</h2>
          <p>{rvw}</p>
          <h2 className="font-bold">RATING : {rating} *</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
