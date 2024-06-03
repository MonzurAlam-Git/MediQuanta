import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/HomeLayout/Homelayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

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
    ],
  },
]);

export default router;
