/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const EditAppointment = () => {
  const patientData = useLoaderData();
  const { _id, category, PatientName, age, details, image_url } = patientData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = e.target;
    const productData = { _id, category, PatientName, age, details, image_url };
    await fetch(
      `https://mediquanta-server-1.onrender.com/patientData/${patientData.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl text-center font-bold mb-5">
          Update Your Problems
        </h1>
        <form onSubmit={handleSubmit} className="grid gap-2 justify-center">
          <input
            className=" w-96 p-2  rounded bg-gray-200 border border-black "
            type="text"
            name="category"
            placeholder="category"
          />
          <input
            className=" w-96 p-2  rounded bg-gray-200 border border-black "
            type="text"
            name="PatientName"
            placeholder="PatientName"
          />
          <input
            className=" w-96 p-2  rounded bg-gray-200 border border-black "
            type="text"
            name="details"
            placeholder="details"
          />
          <input
            className=" w-96 p-2  rounded bg-gray-200 border border-black "
            type="number"
            name="age"
            placeholder="age"
          />
          <input
            className="p-2  w-96 rounded bg-gray-200 border border-black "
            type="text"
            name="image_url"
            placeholder="Image URL"
          />
          {/* <input
          className="p-2  w-96 rounded bg-gray-200 border border-black mb-5"
          type="text"
          name="id"
          placeholder="Id"
        /> */}
          <input
            className="btn btn-success text-white w-48 mx-auto  "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default EditAppointment;
