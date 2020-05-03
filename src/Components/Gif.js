import React from "react";

const Gif = (props) => {

    return (
        <img src={props.gifData.images.preview_gif.url} alt={props.gifData.title}/>
    )

}

export default Gif;