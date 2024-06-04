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
      //   loader: () => fetch("http://localhost:3000/services"),
      // },
      {
        path: "/dashboard/all-appointment",
        element: <Appointments></Appointments>,
        loader: () => fetch("http://localhost:3000/patientData"),
      },
    ],
  },
]);

export default router;
