import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../css/Loader.css';

const Loader = (props) => {

    return(
        <div className={props.fixed ? 'loaderFixed' : 'loaderFloating'}>
            Loading... <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
    )

}

export default Loader;