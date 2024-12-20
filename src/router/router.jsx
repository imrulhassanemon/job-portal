import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MinLayout from "../pages/layout/MinLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/regester/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetail from "../pages/jobDetails/JobDetail";
import PrivateRoute from "./Privateroute";
import JobApply from "../pages/JobApply/JobApply";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MinLayout></MinLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute> ,
          // loader: ({params})
        }
      ]
    },
  ]);

  export default router