import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProvider from "./Components/Shared/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
        <ToastContainer />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
