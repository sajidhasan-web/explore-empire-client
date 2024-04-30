import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../root/Main";
import Home from "../pages/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import MyListPage from "../pages/MyListPage";
import SpotDetailsCard from "../components/SpotDetailsCard/SpotDetailsCard";
import UpdateSpot from "../components/UpdateSpot/UpdateSpot";
import SpotCardDetails from "../pages/SpotCardDetails";
import PecificCountrysSpots from "../pages/PecificCountrysSpots";



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
          path:"/spots/:id",
          element: <SpotDetailsCard></SpotDetailsCard>
        },
        {
          path: "/updateSpot/:id",
          element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
          loader: ({params})=> fetch(`https://b9a10-tourism-management-server.vercel.app/updateSpot/${params.id}`)
        },
        {
            path: "/addTouristsSpot",
            element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>, 
        },
        {
            path: "/allTouristsSpot",
            element:<AllTouristsSpot></AllTouristsSpot>,
        },
        {
            path: "/myListPage",
            element:<PrivateRoute><MyListPage></MyListPage></PrivateRoute>
        },
        {
            path: "/spotCardDetails/:id",
            element:<SpotCardDetails></SpotCardDetails>,
            loader:({params})=> fetch(`https://b9a10-tourism-management-server.vercel.app/singleSpot/${params.id}`)
        },
        {
          path:"/spotsByCountry/:country",
          element: <PecificCountrysSpots></PecificCountrysSpots>,
          loader:({params})=> fetch(`https://b9a10-tourism-management-server.vercel.app/spotsByCountry/${params.country}`)
        }
      ]
    },
  ]);

export default router;