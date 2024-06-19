import { getAuth } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Profile = () => {
  const { email_fetch } = useParams();
  console.log(email_fetch);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/users/${email_fetch}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [email_fetch]);

  console.log("user fetched => ", user);

  const { _id, name, email, number, photoURL } = user;

  return (
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        {/* text and button container  */}
        <div className="grid grid-cols-1 gap-2 max-w-[412px] ">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-cyan-500 underline ">
            {name}
          </h1>
          <h1 className="lg:text-3xl text-wrap sm:text-4xl text-xl font-bold leading-tight text-gray-900">
            <span className="text-red-500">Email : </span>
            {email}
          </h1>
          <h1 className="lg:text-3xl text-wrap sm:text-4xl text-xl font-bold leading-tight text-gray-900">
            <span className="text-teal-500">Phone : </span>
            {number}
          </h1>

          <div className="flex space-x-4">
            <button className="btn btn-accent">
              <Link to={`/update-profile/${_id}`}>Update</Link>
            </button>
            <button className="btn btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
            <button className="btn btn-info text-white">
              <Link to="/update-password">Update Password</Link>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={photoURL}
            className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover"
            alt="hero navigate ui"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
