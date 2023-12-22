import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const TaskForm = ({tasks,setTasks}) => {
  const [task,setTask] = useState({
    id:'',
    name:'',
    status:'todo'
  })
  console.log(task)
  return (
    <div>
      <form >
    <input type="text" className="border-2 border-slate-400 px-2 mr-4"
    value={task.name}
    onChange={(e)=>setTask({...tasks,id:uuidv4(), name:e.target.value} )}
    />
    <button className="btn">Create</button>

      </form>
    </div>
  );
};

export default TaskForm;