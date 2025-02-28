import React, { useReducer, useState } from 'react';


const initialState = {
    tasks: [],
};


function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, { id: Date.now(), text: action.payload }],
            };
        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
}

function ToDoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            dispatch({ type: 'ADD_TASK', payload: newTask });
            setNewTask('');
        }
    };

    const handleRemoveTask = (id) => {
        dispatch({ type: 'REMOVE_TASK', payload: id });
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input
                className='text-black mr-3'
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Adicionar nova tarefa"
            />
            <button onClick={handleAddTask}>Adicionar</button>
            <ul className='mt-2'>
                {state.tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}

                        <button className='ml-2 text-red-500' onClick={() => handleRemoveTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
