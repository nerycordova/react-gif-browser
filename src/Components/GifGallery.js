import React from "react";
import GifThumbnail from './GifThumbnail';
import '../css/GifGallery.css';
import GifView from './GifView';

const GifGallery = (props) => { 

    const [data, _setData] = React.useState([]);
    const [openGif, _setOpenGif] = React.useState(-1);

    //references to be used within window event listener
    const refOpenGif = React.useRef(openGif); 
    const refDataLength = React.useRef(data.length); 

    //Sets index of gif to be opened in the slideshow
    const setOpenGif = value => {
        refOpenGif.current = value;
        _setOpenGif (value);
    }

    //Sets data to be displayed in the grid
    const setData = data => {
        refDataLength.current = data.length;
        _setData(data);
    }

    /**
     * Function that generates nice grid layout that fits/stretches boxes with different heights.
     * It is achieved through absolute positioning.
     * @param {*} data data that needs to be distributed
     * @param {*} columns number of columns to show in the grid
     */
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
            //determine top value : top value of box above + height of box above + 10 margin
            g.top = 0;
            if (row > 0){
                let above = matrix[row-1][col];
                g.top = parseInt(above.top) + parseInt(above.images.fixed_width.height) + 10;
            }
            //determine left value : left value of box to the left + width of box to the left + 10 margin
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

    //shifts carrousel index to left
    const moveLeft = () => setOpenGif ( openGif => openGif - 1 >= 0 ? openGif - 1 : openGif );

    //shifts carrousel index to right
    const moveRight = () => setOpenGif ( openGif => openGif + 1 < data.length ? openGif + 1 : openGif ); 

    React.useEffect ( () => {

        //Listener to allow for keyboard slideshow navigation 
        window.addEventListener('keyup', (e) => {
            if (refOpenGif.current !== -1){
                if (e.key === 'ArrowLeft'){
                    setOpenGif ( refOpenGif.current - 1 >= 0 ? refOpenGif.current - 1 : refOpenGif.current );
                }else if (e.key === 'ArrowRight'){
                    setOpenGif ( refOpenGif.current + 1 < refDataLength.current ? refOpenGif.current + 1 : refOpenGif.current ); 
                }else if (e.key === 'Escape'){
                    setOpenGif(-1);
                }
            }
        });

        return () => {
            window.removeEventListener('keyup', () => {});
        }

    } , [])

    React.useEffect ( () => {
        
        let dataWithLayout = buildGridLayout(props.data, props.columns);
        setData(dataWithLayout);

    }, [props.data, props.columns]);

    if (props.data.length === 0) return null;

    return (
        <>
            {openGif >= 0 && 
                <GifView gif={data[openGif]} 
                         index = {openGif}
                         closeView={ () => setOpenGif(-1) }
                         next = { () => moveRight()  }
                         showNext = { openGif < data.length - 1 }
                         previous = { () => moveLeft() }
                         showPrevious = { openGif > 0}
                         />
            }
            <div className="searchResult">
                {data.map( (item, index) => <GifThumbnail gifData={item} key={index} onClick={ () => setOpenGif(index)  } /> ) }
            </div>
        </>
    )

}

export default GifGallery;