import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router/Router.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Auth  from "./AuthContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth>
      <RouterProvider router={router}></RouterProvider>
    </Auth>
);
