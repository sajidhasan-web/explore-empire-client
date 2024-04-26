import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../root/Main";
import Home from "../pages/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage> ,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/addTouristsSpot",
            element: <AddTouristsSpot></AddTouristsSpot>
        }
      ]
    },
  ]);

export default router;