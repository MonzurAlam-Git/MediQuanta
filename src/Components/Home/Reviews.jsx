// import "react-awesome-slider/dist/styles.css";
import Review from "./Review";

const Reviews = () => {
  const customer_reviews = [
    {
      id: 1,
      img: "https://i.ibb.co/FsXHDnR/happy-beautiful-mature-woman-showing-smartphone-with-blank-black-screen-isolated.jpg",
      name: "Jane Doe",
      age: 34,
      location: "New York, NY",
      rvw: "MediQuanta's analytics have been incredibly helpful in managing my chronic condition. The insights I receive allow me to stay proactive about my health.",
      rating: 5,
      date: "2024-05-01",
    },
    {
      id: 2,
      img: "https://i.ibb.co/ykbQFc7/close-up-portrait-man-looking-camera-outdoors.jpg",
      name: "John Smith",
      age: 45,
      location: "San Francisco, CA",
      rvw: "The predictive analytics feature helped my doctors identify a potential issue early on. I am very grateful for the technology and the care I received.",
      rating: 4.5,
      date: "2024-04-15",
    },
    {
      id: 3,
      img: "https://i.ibb.co/tQqPVpX/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
      name: "Mary Johnson",
      age: 29,
      location: "Chicago, IL",
      rvw: "The custom dashboards are easy to understand and provide me with all the information I need about my health status. MediQuanta has made healthcare more transparent for me.",
      rating: 5,
      date: "2024-03-20",
    },
    {
      id: 4,
      img: "https://i.ibb.co/FsXHDnR/happy-beautiful-mature-woman-showing-smartphone-with-blank-black-screen-isolated.jpg",
      name: "Robert Brown",
      age: 53,
      location: "Austin, TX",
      rvw: "Using MediQuanta's tools, my healthcare provider was able to tailor a treatment plan specifically for my needs. The personalized care has made a huge difference.",
      rating: 4,
      date: "2024-02-10",
    },
    {
      id: 5,
      img: "https://i.ibb.co/zsHXkWj/indoor-shot-attractive-young-woman-with-glasses-posing-against-white-wall.jpg",
      name: "Linda Wilson",
      age: 61,
      location: "Miami, FL",
      rvw: "The data-driven approach of MediQuanta gave me peace of mind. Knowing that my health is being monitored with advanced analytics makes me feel secure.",
      rating: 4.5,
      date: "2024-01-30",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center font-bold m-10">
        Listen From Our Customers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-1  mx-auto">
        {customer_reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
