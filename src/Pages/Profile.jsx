import { getAuth } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Link } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const { accessToken, displayName, email, phoneNumber, photoURL } = user;
  //   Name ,email,profilepicture
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Name : {user.displayName}</h1>
          <h1 className="text-4xl font-bold">Email : {user.email}</h1>
          <h1 className="text-3xl font-bold">Contact : {user.phoneNumber}</h1>

          <Link
            className="btn btn-info p-3 text-white mt-5"
            to={`update-profile/${user.accessToken}`}
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
