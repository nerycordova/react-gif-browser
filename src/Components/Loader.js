import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../css/Loader.css';

const Loader = (props) => {

    let className;

    switch(props.position){
        case 'floating':
            className = 'loaderFloating';
            break;
        case 'absolute':
            className = 'loaderAbsolute';
            break;
        default:
            className = 'loaderFixed';
    }

    return(
        <div className={className}>
            Loading... <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
    )

}

export default Loader;