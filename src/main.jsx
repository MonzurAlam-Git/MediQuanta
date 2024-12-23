import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import AuthProvider from "./Components/Shared/AuthProvider.jsx";
import "./index.css";
import router from "./Routes/router.jsx";

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
