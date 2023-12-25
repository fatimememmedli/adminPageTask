import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/users/Users.tsx";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddUser from "../pages/addUser/AddUser";
import AdminLogin from "../pages/adminLogin/AdminLogin.tsx";
import Detail from "../pages/detail/Detail.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <Detail />,
  },
  {
    path: "/addUser",
    element: <AddUser />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
