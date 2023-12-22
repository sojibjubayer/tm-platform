// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const TodoList = ({tasks,setTasks}) => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [todos,setTodos] = useState([])
    const [ongoing,setOngoing] = useState([])
    const [complete,setComplete] = useState([])


        useEffect(()=>{

            const fTodos = tasks.filter((task)=>task.status=== 'todo')
            const fOngoing = tasks.filter((task)=>task.status=== 'ongoing')
            const fComplete = tasks.filter((task)=>task.status=== 'complete')

            setTodos(fTodos)
            setOngoing(fOngoing)
            setComplete(fComplete)
        },[tasks])

        const statuses = ['todo', 'ongoing' , 'coplete']




















    const { refetch, data: myTask = [], isLoading } = useQuery({
        queryKey: ['myTask', user.email], // Include user.email in the query key
        queryFn: async () => {
            const res = await axiosPublic.get(`/myTask/${user.email}`);
            return res.data;
        
        }
    })
    // console.log(myTask)
    const reversedTasks = myTask.slice().reverse();
    return (
        <div>
            {/* <div className=" bg-yellow-700 p-2 font-semibol text-2xl rounded-lg text-white text-center">
                TodoList.  Total ToDo: {myTask.length}
            </div> */}
            {
                reversedTasks?.map((task) => <div key={task._id} className="bg-yellow-400 my-4 p-4 rounded-lg ">
                    <p className="border-b border-white font-semibold">Title: {task.title}</p>
                    <p className="border-b border-white">Description: {task.description}</p>
                    <p className="border-b border-white">Deadline: {task.deadline}</p>
                    <p className="border-b border-white">Priority: {task.priority}</p>



                </div>)
            }

        </div>
    );
};

export default TodoList;