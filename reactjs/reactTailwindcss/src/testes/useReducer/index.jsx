import React, { useReducer, useState } from 'react';


const initialState = {
    tasks: [],
};

const initialState2 = {
    data: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, { id: Date.now(), data: Date(), text: action.payload }],
            };
        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };        
        default:
            return state;
    }
}

function reducer2(state, action) {
    switch (action.type) {
        case 'DATA_TASK':
            return {
                data: [...state.data, { id: Date.now(), data: Date()}],
            };      
        default:
            return state;
    }
}

function ToDoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    
    const [state2, dispatch2] = useReducer(reducer2,initialState2)
    console.log(state2);
    
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            dispatch({ type: 'ADD_TASK', payload: newTask });
            setNewTask('');

            dispatch2({type: 'DATA_TASK'})
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
                        <span className='ml-2'>{task.data}</span>
                        <button className='ml-2 text-red-500' onClick={() => handleRemoveTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>

            <div>
                {state2.data.map(data => (
                    <h1 key={data.id}>{data.data}</h1>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
