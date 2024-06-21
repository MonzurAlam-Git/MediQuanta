import { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Dashboard_home = () => {
  const [usersNumber, setUsersNumber] = useState(0);
  fetch("https://mediquanta-server-1.onrender.com/users")
    .then((res) => res.json())
    .then((data) => setUsersNumber(data.length));

  const [patientData, setpatientData] = useState(0);
  fetch("https://mediquanta-server-1.onrender.com/patientData")
    .then((res) => res.json())
    .then((data) => setpatientData(data.length));
  {
    /* Services */
  }
  const [services, setservices] = useState(0);
  fetch("https://mediquanta-server-1.onrender.com/services")
    .then((res) => res.json())
    .then((data) => setservices(data.length));

  const data = [
    {
      name: "Cardiology",
      Others: 2400,
      MediQuanta: 4000,
      amt: 2400,
    },
    {
      name: "Urology",
      Others: 1398,
      MediQuanta: 3000,
      amt: 2210,
    },
    {
      name: "Neurology",
      Others: 2000,
      MediQuanta: 9800,
      amt: 2290,
    },
    {
      name: "Gastrology",
      Others: 2281,
      MediQuanta: 2799,
      amt: 2000,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner ">
            <h3>Services</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{services}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Patient</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{patientData}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Users</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{usersNumber}</h1>
        </div>
      </div>
      <h1 className="text-2xl text-center font-bold text-emerald-500 bg-gray-700 container mx-auto p-2 m-5 rounded-xl">
        Compare With Others
      </h1>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="MediQuanta" fill="#8884d8" />
            <Bar dataKey="Others" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="MediQuanta"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Others" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Dashboard_home;
