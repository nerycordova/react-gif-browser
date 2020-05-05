import React from "react";
import '../css/GifView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Components/Loader';

const GifView = (props) => {

    const [loaded, setLoaded] = React.useState(false); //used to determine if image has been loaded
    const refOverlay = React.useRef();

    const resource = props.gif.images.original;
    const webp   = resource.webp;
    const title  = props.gif.title;
    const width  = parseInt(resource.width) + 10;
    const height = parseInt(resource.height) + 10;

    React.useEffect( () => {
        //Listener to allow for closing of slideshow when clicking outside
        refOverlay.current.addEventListener('click', (e) => {
           if (e.target.className === 'overlay'){
                props.closeView()
           }
        });

    } , [])


    React.useEffect( () => {
        setLoaded(false);
    } , [props.gif])
    
    return (
        <div className="overlay" ref={refOverlay}>
            
            <FontAwesomeIcon 
                    icon={faTimes} 
                    className="closeButton"
                    onClick={ props.closeView }/>

            {props.showPrevious &&
            <FontAwesomeIcon 
                icon={faChevronLeft} 
                className="leftButton"
                onClick={ props.previous }/>
            }

            <div className="modalWindow" style={{width: width  + 'px', height: height + 'px'}}>
                <div className="previewContainer">
                    {!loaded && <Loader position='absolute' />}
                    <img src={webp} 
                         alt={title}
                         key={props.index}
                         style={{zIndex:2, maxWidth:'1000px', maxHeight:'600px'}}
                         onLoad={ () => { setLoaded(true) } }
                    /> 
                </div>
            </div>

            {props.showNext &&
            <FontAwesomeIcon 
                icon={faChevronRight} 
                className="rightButton"
                onClick={ props.next }/>
            }
        </div>
    )
}

export default GifView;