import React, { useEffect, useState } from 'react';
import Section from './Section';

const ListTask = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([])
    const [ongoing, setOngoing] = useState([])
    const [complete, setComplete] = useState([])


    useEffect(() => {
        const fTodos = tasks.filter(task => task.status === 'todo')
        const fOngoing = tasks.filter(task => task.status === 'ongoing')
        const fComplete = tasks.filter(task => task.status === 'complete')

        setTodos(fTodos)
        setOngoing(fOngoing)
        setComplete(fComplete)
    }, [tasks])

    const statuses = ['todo', 'ongoing', 'complete']
    return (
        <div className='flex flex-row gap-12'>
            {
                statuses.map((status, index) => <Section key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    setTodos={setTodos}
                    ongoing={ongoing}
                    setOngoing={setOngoing}
                    complete={complete}
                    setComplete={setComplete}
                />
                )

            }

        </div>
    );
};

export default ListTask;


