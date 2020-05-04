import React from "react";
import GifThumbnail from './GifThumbnail';
import '../css/GifGallery.css';

const GifGallery = (props) => { 

    const [data, setData] = React.useState([]);

    const buildGridLayout = ( data, columns ) => {
        
        const matrix = [];
        let   index = 0;
        let   row = -1;
        for (let g of data){
            //initialize row
            if (index % columns === 0){
                row ++;
                matrix[row] = [];
            }
            //determine col number
            const col = index - row*columns;
            //determine top value
            g.top = 0;
            if (row > 0){
                let above = matrix[row-1][col];
                g.top = parseInt(above.top) + parseInt(above.images.fixed_width.height) + 10;
            }
            //determine left value
            g.left = 0;
            if (col > 0){
                let before = matrix[row][col-1];
                g.left = parseInt(before.left) + parseInt(before.images.fixed_width.width) + 10;
            }
    
            matrix[row].push(g);
            index++;
        }
        return data;
    }

    React.useEffect ( () => {
        
        let dataWithLayout = buildGridLayout(props.data, props.columns);
        setData(dataWithLayout);

    }, [props.data, props.columns]);


    if (props.data.length === 0) return null;

    return (
        <div className="searchResult">
            {data.map( (item, index) => <GifThumbnail gifData={item} key={index}/> ) }
        </div>
    )

}

export default GifGallery;