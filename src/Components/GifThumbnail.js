import React from "react";

const GifThumbnail = (props) => {

    const resource = props.gifData.images.fixed_width;
    const webp   = resource.webp;
    const title  = props.gifData.title;
    const width  = resource.width;
    const height = resource.height;

    return (
        <div style={{position:'absolute', width: width+'px', height: height + 'px', 
                    top: props.gifData.top, left: props.gifData.left, //top and left values as per grid layout calculation (buildGridLayout)
                    backgroundColor:'#bbbbf9', cursor:'pointer'}}
            onClick = {props.onClick}
        >
            <img src={webp} alt={title} />
        </div>
    )

}

export default GifThumbnail;