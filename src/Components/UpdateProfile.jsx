import useAuth from "../Hooks/useAuth";

const UpdateProfile = () => {
  const { user } = useAuth();
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const displayName = form.displayName.value;

    const userData = { email, displayName };
    console.log(user._id);

    await fetch(`https://mediquanta-server-1.onrender.com/user/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => alert("profile updated successfully"));
  };
  return (
    <div className="h-screen">
      <h1 className="text-2xl text-center font-bold">Update Profile</h1>
      <form onSubmit={handleSubmit} className="grid gap-2 justify-center">
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="displayName"
          placeholder=" Name"
        />
        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          name="email"
          placeholder="Email"
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
