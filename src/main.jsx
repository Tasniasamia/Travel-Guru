import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home_layout from './Components/Layout/Home_layout/Home_layout';
import Destination from './Components/Pages/Home/Destination/Destination';
import News from './Components/Pages/Home/News/News';
import Other_layout from './Components/Layout/Other_layout/Other_layout';
import Hotel from './Components/Pages/Home/Hotel/Hotel';
import { NavLink } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_layout></Home_layout>,
    children:[
      {
        path:"/",
        element:<News></News>,
        
      
      },{
        path:"/Destination/:id",
        element:<Destination></Destination>,
        loader:({params})=>fetch(`https://server-tasniasamia.vercel.app/pick_name/${params.id}`)
      },{
        path:"/Destination",
        element:<Navigate to="/Destination/1"></Navigate>
      }
    ]
  },{
    path:"/other_layout",
    element:<Other_layout></Other_layout>,
    children:[
      {
        path:"/other_layout/:id",
        element:<Hotel></Hotel>,
        loader:({params})=>fetch(`https://server-tasniasamia.vercel.app/hotel/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);