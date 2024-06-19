import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Bounce, toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useAuth();
  console.log("user", user);

  const { id } = useParams();
  console.log(id);

  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.displayName.value;
    const photoURL = form.photoURL.value;
    const number = form.number.value;

    const userData = { email, name, photoURL, number };
    console.log("user_id", id);

    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        const user = response.data;
        localStorage.setItem("token", user?.token);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="max-w-[412px] mx-auto my-5">
      <h1 className="text-2xl text-center font-bold">Update Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 justify-center mx-auto lg:w-96"
      >
        <input
          className="p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="displayName"
          placeholder="Name"
        />
        <input
          className="p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="email"
          placeholder="Email"
          value={user?.email}
          disabled
        />
        <input
          className="p-2 rounded bg-gray-200 border border-black "
          type="text"
          name="photoURL"
          placeholder="place your Profile photoURL"
        />
        <input
          className="p-2 rounded bg-gray-200 border border-black "
          type="number"
          name="number"
          placeholder="Contact Number"
        />

        <input
          className="btn btn-success text-white w-48 mx-auto  "
          type="submit"
        />
      </form>
    </div>
  );
};

export default UpdateProfile;
