import { useLoaderData } from "react-router-dom";
import SingleProductDashboard from "./SingleProductDashboard";
import { useEffect, useState } from "react";

const Appointments = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({});

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filterCriteria.category
      ? item.category === filterCriteria.category
      : true;
    return matchesSearch && matchesFilter;
  });

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://mediquanta-server-1.onrender.com/patientData")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const handleDeleteappointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment._id !== id)
    );
  };

  return (
    <div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered border border-red-700 w-24 md:w-3/5 mx-auto my-5"
        />
        <select
          className="w-24 md:w-3/5 mx-auto my-5 border border-green-500"
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, category: e.target.value })
          }
        >
          <option value="">All Categories</option>
          <option value="cardiology">cardiology</option>
          <option value="neorology">neurology</option>
        </select>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="container flex flex-wrap mx-auto align-center justify-center">
        {appointments.map((appointment) => (
          <SingleProductDashboard
            key={appointment._id}
            appointment={appointment}
            onDelete={handleDeleteappointment}
          ></SingleProductDashboard>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
