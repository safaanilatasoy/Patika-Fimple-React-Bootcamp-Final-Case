import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// React Router DOM 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    // DEFAULT
    path: "/",
    element: <App />,
  },
  {

    path: "/basvuru-olustur",
    element: <div>Basvuru olutur</div>,
  },
  {
    path: "/basvuru-basarili",
    element: <div>Basvuru basarili</div>,
  },
  {
    path: "/basvuru-sorgula",
    element: <div>Basvuru sorgula</div>,
  },
  {
    path: "/admin",
    element: <div>Admin</div>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
