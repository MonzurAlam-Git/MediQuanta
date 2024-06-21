import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const Customize = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem("token");
  const onSubmit = async (patientData) => {
    // const response = await axios.post(
    //   "https://mediquanta-server-1.onrender.com/patientData",
    //   patientData
    // );

    await fetch("https://mediquanta-server-1.onrender.com/patientData", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(patientData),
    })
      .then((res) => res.json())
      .then((data) => alert("successfully Added"));
    // console.log(response);
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4">
        Customize Your Problem
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-2 justify-center"
      >
        <select
          className="border-5 p-2"
          {...register("category", { required: true })}
        >
          <option value="">Choose a category</option>
          <option value="cardiology">Cardiology</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Urology">Urology</option>
          <option value="Neurology">Neurology</option>
        </select>
        {errors.category && <span>This field is required</span>}

        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          {...register("PatientName", { required: true })}
          placeholder="Patient Name"
        />
        {errors.PatientName && <span>This field is required</span>}

        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="number"
          {...register("age", { required: true })}
          placeholder="age"
        />
        {errors.age && <span>This field is required</span>}

        <input
          className=" w-96 p-2  rounded bg-gray-200 border border-black "
          type="text"
          {...register("details", { required: true })}
          placeholder="Details"
        />
        {errors.details && <span>This field is required</span>}

        <input
          className="p-2  w-96 rounded bg-gray-200 border border-black "
          type="text"
          {...register("image_url")}
          placeholder="Any Previous Prescription you want to refer"
        />

        <button
          className="btn btn-success text-white w-48 mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Customize;
