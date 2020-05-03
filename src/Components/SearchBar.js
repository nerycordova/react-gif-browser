import React from "react";

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <>
            <input type = "text" 
                   placeholder="Type your search tems" 
                   value={searchTerm} 
                   onChange={ event => setSearchTerm(event.target.value)  } 
                   onKeyDown={ event => event.key === 'Enter' && props.onSearch(searchTerm) }
                   />
            
            <button onClick = { () =>  props.onSearch(searchTerm) }>Search</button>
        </>
    )

}

export default SearchBar;