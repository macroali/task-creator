// React
import React from 'react';
import ReactDOM from 'react-dom';
// Bootstrap
import 'bootstrap';
// Style
import './modal.scss'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div id="main-modal" className="modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    { children }
                </div>
            </div>
        </div>,
        document.getElementById('root-modal')
    );
}

export { Modal }