// Recat
import React from "react";
// Context
import { TodoContext } from '../../services/TodoContext'
// Bootstrap
import { Modal } from "bootstrap";

function TodoForm() {
    const [todoTitle, setTodoTitle] = React.useState('');
    const [todoDescription, setTodoDescription] = React.useState('');

    const {
        addTodo,
    } = React.useContext(TodoContext)

    const onChange = (event, inputName) => {
        switch (inputName) {
            case 'title':
                setTodoTitle(event.target.value);
            break;

            case 'description':
                setTodoDescription(event.target.value);
            break;
        
            default:
            break;
        }
    }

    const createTask = (e) => {
        e.preventDefault();
        addTodo(todoTitle, todoDescription);
        var myModalEl = document.getElementById('main-modal');
        var modal = Modal.getInstance(myModalEl);
        modal.hide();
        setTodoTitle('');
        setTodoDescription('');
    }

    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title">Crear tarea</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={ createTask }>
                <div className="modal-body">
                    <div className='mb-3'>
                        <label>Título</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            id='title'
                            onChange={ (e) => { onChange(e, 'title') } }
                            value={todoTitle}
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Descripción</label>
                        <textarea
                            className='form-control' 
                            name='description' 
                            id='description'
                            onChange={ (e) => { onChange(e, 'description') } }
                            value={todoDescription}
                        ></textarea>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </>
    );
}

export { TodoForm };