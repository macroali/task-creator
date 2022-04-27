// React
import React from "react";
// Context
import { TodoContext } from '../../services/TodoContext'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// Sass
import './todo-search.scss';

function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext);

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="input-group mb-3 mt-4 css-box-shadow">
            <input
                type="text"
                className="form-control css-search"
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="btn-search"
                onChange={ (e) => onSearch(e) }
                value={ search }
            />
            <button className="btn btn-primary" type="button" id="btn-search"><FontAwesomeIcon icon={solid('magnifying-glass')} /></button>
        </div>
    ); 
}

export { TodoSearch }