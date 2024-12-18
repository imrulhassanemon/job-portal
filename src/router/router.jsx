import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MinLayout from "../pages/layout/MinLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/regester/Register";
import SignIn from "../pages/signin/SignIn";

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
        }
      ]
    },
  ]);

  export default router