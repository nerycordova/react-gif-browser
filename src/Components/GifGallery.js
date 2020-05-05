import React from "react";
import GifThumbnail from './GifThumbnail';
import '../css/GifGallery.css';
import GifView from './GifView';

const GifGallery = (props) => { 

    const [data, _setData] = React.useState([]);
    const [openGif, _setOpenGif] = React.useState(-1);
    const refOpenGif = React.useRef(openGif);
    const refDataLength = React.useRef(data.length);

    const setOpenGif = value => {
        refOpenGif.current = value;
        _setOpenGif (value);
    }

    const setData = data => {
        refDataLength.current = data.length;
        _setData(data);
    }

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

    const moveLeft = () => setOpenGif ( openGif => openGif - 1 >= 0 ? openGif - 1 : openGif );

    const moveRight = () => setOpenGif ( openGif => openGif + 1 < data.length ? openGif + 1 : openGif ); 

    React.useEffect ( () => {

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