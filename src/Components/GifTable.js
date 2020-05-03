import React from "react";
import Gif from './Gif';

const GifTable = (props) => { 
    
    if (props.data.lengt === 0) return <p>Nothing to show here :( </p>;

    return (

        <div className="searchResult">
            {props.data.map( item => <Gif gifData={item} key={item.id}/> ) }
        </div>

    )

}

export default GifTable;