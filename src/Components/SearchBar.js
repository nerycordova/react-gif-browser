import React from "react";
import '../css/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const inputRef = React.createRef();

    React.useEffect ( () => {
        inputRef.current.focus();
    } , []);

    return (
        <div className={props.position === 'center' ? 'searchBar' : 'searchBar-Top'}>
            <div className="searchTitle">
                
                <h1 onClick={()=>{window.location.reload()}} style={{cursor:'pointer'}}>
                    GIF browser
                </h1>
                <sub>Powered by <a href="https://developers.giphy.com/docs/sdk/" rel="noopener noreferrer" target="_blank">Giphy</a></sub>
                
            </div>
            <div className="searchForm">
                <input type = "text" 
                    ref = {inputRef}
                    className = "searchInput"
                    placeholder="Search GIF database..." 
                    value={searchTerm} 
                    onChange={ event => setSearchTerm(event.target.value)  } 
                    onKeyDown={ event => event.key === 'Enter' && props.onSearch(searchTerm) }
                    />
                
                <button className = "searchButton" 
                        onClick = { () =>  props.onSearch(searchTerm) }>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
            </div>
        </div>
    )

}

export default SearchBar;