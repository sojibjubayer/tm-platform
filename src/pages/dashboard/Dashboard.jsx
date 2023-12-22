import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CreateTask from "../../components/CreateTask";
import ListTask from "../../components/ListTask";

import { Toaster } from "react-hot-toast";

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])
    console.log('task', tasks)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')))
    }, [])

    return (

        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col ">
                <Toaster />
                <div className="  bg-teal-400  md:mt-0">
                    <div className="menu p-2   flex flex-row items-center justify-center">
                        <img src={user?.photoURL} className="w-24 mx-auto rounded-full " alt="" />
                        <NavLink to="/" className='flex flex-row items-center '>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </div>
                </div>
                <div className="flex flex-col  ">
                    <div className="flex flex-col">
                        <CreateTask tasks={tasks} setTasks={setTasks} />
                        <ListTask tasks={tasks} setTasks={setTasks} />
                    </div>

                </div>
            </div>
        </DndProvider>



    );
};

export default Dashboard;