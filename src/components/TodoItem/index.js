import React from "react";
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function TodoItem(props) {
    return (
        <li className={`css-box-shadow mt-3 ${props.completed && 'css-task-success'}`}>
            <h3>
                { props.title } 
                <span
                    className="css-icon css-remove"
                    onClick={ props.onRemove }
                >
                    <FontAwesomeIcon icon={ solid('trash-can') } />
                </span>
                {/* Condicional si esta completado no se muestra el boton */}
                { !props.completed && 
                    <span
                        className="css-icon css-success"
                        onClick={ props.onComplete }
                        role="button"
                    >
                        <FontAwesomeIcon icon={ solid('circle-check') } />
                    </span> 
                }
            </h3>
            <p>{ props.description }</p>
        </li>
    );
}

export { TodoItem }