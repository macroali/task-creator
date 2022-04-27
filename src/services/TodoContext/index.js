// React
import React from "react";
// useLocalStorage
import { useLocalStorage } from "./useLocalStorage";

// El context es un objeto con dos parametros: Provicer y Consumer 
const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodo,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    
    const [search, setSearch] = React.useState('');
    const completedTodo = todos.filter(todo => !!todo.completed);
    const [openModal, setOpenModal] = React.useState(false);

    let todoList = todos;
    if (search.length > 0) {
        const searchText = search.toLowerCase();

        todoList = todos.filter(todo => {
            const formedTitle = todo.title.toLowerCase();
            return formedTitle.includes(searchText);
        });
    }

    const completeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.title === key);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodo(newTodos);
    }

    const removeTodo = (key) => {
        const todoIndex = todos.findIndex(todo => todo.title === key);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodo(newTodos);
    }

    const addTodo = (title, description) => {
        const newTodos = [...todos];
        newTodos.push({
            title: title,
            completed: false,
            description: description
        });
        saveTodo(newTodos);
    }

    const total = todos.length;

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            total,
            completedTodo,
            search,
            setSearch,
            completeTodo,
            removeTodo,
            addTodo,
            todoList,
            openModal,
            setOpenModal
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };