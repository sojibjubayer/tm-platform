import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import NewTask from "../pages/task/newTask/NewTask";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
    ]

},
{
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //normal user routes
      {
        path:'newTask',
        element:<PrivateRoute><NewTask></NewTask></PrivateRoute>

      },
    //   {
    //     path: 'myDonationrequest',
    //     element: <PrivateRoute><MyDonationRequest></MyDonationRequest></PrivateRoute>
    //   },
      
    ]
  }



])