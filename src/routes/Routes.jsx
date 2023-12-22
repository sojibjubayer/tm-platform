import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";

import TaskForm from "../pages/task/newTask/TaskForm";
import Dashboard from "../pages/dashboard/Dashboard";
import TodoList from "../pages/task/todoList/TodoList";
import OnGoing from "../pages/task/ongoing/OnGoing";
import Completed from "../pages/task/completed/Completed";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

    ]

  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //normal user routes
      {
        path: 'newTask',
        element: <PrivateRoute><TaskForm></TaskForm></PrivateRoute>

      },
      {
        path: 'todoList',
        element: <TodoList></TodoList>
      },
      {
        path: 'onGoing',
        element: <OnGoing></OnGoing>
      },
      {
        path: 'completed',
        element: <Completed></Completed>
      },


    ]
  }



])