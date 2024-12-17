import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Pages
import App from "./App";
import Homeview from "./Views/HomeView";
import ErrorView from "./Views/NotFoundView";
import reportWebVitals from "./reportWebVitals";

// Routing setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,       // Updated to 'element'
    errorElement: <ErrorView />,
  },
  {
    path: "/home",
    element: <Homeview />,  // Updated to 'element'
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
