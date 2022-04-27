// React
import React from 'react';
// UI
import { AppUI } from './AppUI';
// Provider
import { TodoProvider } from '../services/TodoContext';
// style
// import 'bootstrap';
import './app.scss';

// const defaultTodos = [
//     { title: 'Tarea 1', completed: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sagittis est.' },
//     { title: 'Tarea 2', completed: false, description: 'Nulla vitae est tellus. Nunc accumsan bibendum blandit.' },
//     { title: 'Tarea 3', completed: false, description: 'Aenean ac dapibus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.setItem('TODOS_V1', '');
// <React.Fragment> = <>

function App() {
    
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
