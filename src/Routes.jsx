import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import AddClient from "./pages/AddClient";
import Settings from "./pages/Settings";

export const router = createBrowserRouter(
   [
    {
        path: '/',
        element: <Home/>,
        children:[
            { 
             path: 'dashboard',
             element: <Dashboard></Dashboard>
             
            },
            {
                path:'client',
                element:<Client></Client>
            },
            {
                path:'add-client',
                element:<AddClient></AddClient>
            },
            {
                path:'setting',
                element: <Settings></Settings>
            }
        ]
    }
   ]
)