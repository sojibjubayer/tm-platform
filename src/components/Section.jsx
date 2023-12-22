import React from 'react';
import Header from './Header';
import Task from './Task';
import { useDrag, useDrop } from 'react-dnd';
import toast from 'react-hot-toast';

const Section = ({ status, tasks, setTasks, todos, setTodos, ongoing, setOngoin, complete, setOncomplete }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = 'Todo'
    let bg = 'bg-slate-500'
    let tasksToMap = todos

    if (status === 'ongoing') {
        text = 'On Going'
        bg = 'bg-purple-500'
        tasksToMap = ongoing
    }
    if (status === 'complete') {
        text = 'Complete'
        bg = 'bg-teal-500'
        tasksToMap = complete
    }

    const addItemToSection = (id) => {
        setTasks(prev=>{
            const mTasks = prev.map(t=>{
                if(t.id===id){
                    return{...t, status: status}
                }
                return t;
            })

            localStorage.setItem('tasks',JSON.stringify(mTasks))
            toast('task status changed')
            return mTasks;
        })
    }

    return (
        <div ref={drop} className={`w-64 ${isOver? 'bg-slate-200':''}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task.id}
                task={task} tasks={tasks} setTasks={setTasks}
            />)}
        </div>
    );
};

export default Section;