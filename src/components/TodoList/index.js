// React
import React from "react";
// Sass
import './todo-list.scss';

function TodoList(props) {
    return (
        <section id="list-section">
            <h2>Lista de tareas:</h2>

            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export { TodoList }