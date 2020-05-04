import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = (props) => {

    return(
        <div style={{color: '#7f51fd', position:'fixed', right:'15px', bottom:'15px', fontSize:'30px', marginTop:'10px'}}>
            Loading... <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
    )

}

export default Loader;