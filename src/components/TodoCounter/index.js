// Reacct
import React from 'react';
// Context
import { TodoContext } from '../../services/TodoContext'
// Style
import './todo-counter.scss'

function TodoCounter() {
    const { total, completedTodo } = React.useContext(TodoContext);

    return (
        <h2 className="css-title">Has completado { completedTodo.length } de { total } Tareas</h2>
    );
}

export { TodoCounter }