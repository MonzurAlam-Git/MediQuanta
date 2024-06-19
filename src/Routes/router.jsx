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
import UpdateProfile from "../Components/UpdateProfile";

import About from "../Components/Home/About";
import PrivateRoute from "./PrivateRoute";
import UpdatePassword from "../Pages/Authentication/UpdatePassword";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile/:email_fetch",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        loader: (params) =>
          fetch(`http://localhost:3000/users/${params.email_fetch}`),
      },
      {
        path: "/update-profile/:id",
        element: <UpdateProfile />,
      },
      {
        path: "/update-password",
        element: <UpdatePassword />,
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
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/customize-product",
        element: <Customize></Customize>,
      },
      // {
      //   path: "/dashboard/all-products",
      //   element: <AllProducts></AllProducts>,
      //   loader: () => fetch("http://localhost:3000/services"),
      // },
      {
        path: "/dashboard/all-appointment",

        element: (
          <PrivateRoute>
            <Appointments></Appointments>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:3000/patientData"),
      },
      {
        path: "all-appointment/patientData/:id",
        element: <AppointmentDetails></AppointmentDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/patientData/${params.id}`),
      },
      {
        path: "/dashboard/all-appointment/patientData/update/:id",
        element: <EditAppointment />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/patientData/${params.id}`),
      },
    ],
  },
]);

export default router;
