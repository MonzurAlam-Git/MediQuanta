import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/HomeLayout/Homelayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Profile from "../Pages/Profile";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Customize from "../Components/Dashboard/Customize";
import Appointments from "../Components/Dashboard/Appointments";
import AppointmentDetails from "../Components/Dashboard/AppointmentDetails";
import EditAppointment from "../Components/Dashboard/EditAppointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/customize-product",
        element: <Customize></Customize>,
      },
      // {
      //   path: "/dashboard/all-products",
      //   element: <AllProducts></AllProducts>,
      //   loader: () => fetch("https://mediquanta-server-1.onrender.com/services"),
      // },
      {
        path: "/dashboard/all-appointment",
        element: <Appointments></Appointments>,
        // loader: () => fetch("https://mediquanta-server-1.onrender.com/patientData"),
      },
      {
        path: "all-appointment/patientData/:id",
        element: <AppointmentDetails></AppointmentDetails>,
        loader: ({ params }) =>
          fetch(
            `https://mediquanta-server-1.onrender.com/patientData/${params.id}`
          ),
      },
      {
        path: "/dashboard/all-appointment/patientData/update/:id",
        element: <EditAppointment />,
        loader: ({ params }) =>
          fetch(
            `https://mediquanta-server-1.onrender.com/patientData/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
