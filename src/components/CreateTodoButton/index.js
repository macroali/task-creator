// React
import React from "react";
// Bootstrap
import { Modal } from "bootstrap";

function CreateTodoButton() {
    const showModalForm = () => {
        let mainModal = new Modal(document.getElementById('main-modal'), { });
        mainModal.show();
    };

    return (
        <button onClick={ showModalForm } className="btn btn-success mt-3 pt-2 pb-2 css-w100">Nueva tarea</button>
    );
}

export { CreateTodoButton }