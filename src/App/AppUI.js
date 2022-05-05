// React
import React from "react";
// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// Context 
import { TodoContext } from "../services/TodoContext";
// Components
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { Loader } from '../components/Loader';

function AppUI() {
    const {
        error, 
        loading,
        total,
        todoList,
        completeTodo,
        removeTodo
    } = React.useContext(TodoContext);
    
    return (
        <div className='css-container'> 
            <TodoCounter />

            <TodoSearch />
            
            <TodoList>
                { error && <div className="alert alert-danger">Opps, se ha producido un error</div> }
                {/* { loading && <div className="alert alert-primary"><FontAwesomeIcon className="fa-spin-pulse" icon={ solid('spinner') } /> Cargando</div> } */}
                { loading && <Loader /> }
                { (!loading && total == 0) && <div className="alert alert-warning">Crear primer tarea</div> }
                {/* { loading && <Loader /> } */}
                

                { todoList.map(todo => (
                    <TodoItem
                        key={ todo.title }
                        title={ todo.title }
                        description={ todo.description }
                        completed={ todo.completed }
                        onComplete={ () => completeTodo(todo.title) }
                        onRemove={ () => removeTodo(todo.title) }
                    />
                )) }
            </TodoList>
            
            <Modal>
                <TodoForm />
            </Modal>
                
            <CreateTodoButton />
        </div>
    );
}

export { AppUI }