import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';


const CreateTask = ({ tasks, setTasks }) => {

    const [task, setTask] = useState({
        id: '',
        name: '',
        status: 'todo'
    })

    console.log(task)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (task.name.length < 3) return toast.error('input must be 3 character')

        setTasks((prev) => {
            const list = [...prev, task]
            localStorage.setItem('tasks', JSON.stringify(list))
            return list;
        })
        toast.success('Task created')
        setTask({
            id: '',
            name: '',
            status: 'todo'
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="my-4 ">
                <input
                    type="text"
                    className="border-2 border-slate-400 bg-slate-100 mr-2 px-1 p-2"
                    value={task.name}
                    onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                />
                <button className="bg-cyan-500 p-2 rounded-lg">create</button>
            </form>
        </div>
    );
};

export default CreateTask;