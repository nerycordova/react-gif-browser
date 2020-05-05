import React from 'react';
import SearchBar from './Components/SearchBar';
import GifGallery from './Components/GifGallery';
import Loader from './Components/Loader';
import GithubCorner from 'react-github-corner';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

//Number of GIFs to retrieve per API call
const PAGE_SIZE = 25;
//Number of columns to show in the GIF grid
const GRID_COLUMNS = 6;

const App = () => {

  const [data, setData] = React.useState([]);
  const [q, setQ] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [noData, setNoData] = React.useState(false);
  const [error, setError] = React.useState(null);

  /**
   * Fetch data from Giphy endpoint
   * @param {*} q search term
   * @param {*} page  page number
   */
  const getData = ( q, page = 0) => {
    
    if (q === null || page * PAGE_SIZE > total ) return;

    setLoading(true); 

    window.fetch(`${API_URL}?api_key=${API_KEY}&q=${q}&limit=${PAGE_SIZE}&offset=${PAGE_SIZE*page}`)
      .then( response => response.json() )
      .then( json => {
        setLoading(false);
        setError(null);
        setTotal(json.pagination.total_count);
        setNoData( json.data.length === 0 );
        setData( data => {
          if (page === 0) return json.data;
          return data.concat(json.data);
        })
      })
      .catch( error => { 
          setError('Ouch! There has been an error. Please try again later.');
          setLoading(false);
    } );

  }

  /**
   * Triggers a search of a new term
   * @param {*} searchTerm 
   */
  const doSearch = (searchTerm) => {
    if (searchTerm.length === 0) return;
    
    setPage(0);
    setData([]);
    setQ(searchTerm);
  } 

  React.useEffect( () => {
    //Listen to scroll events in order to fetch more data when user reaches the bottom of the page
    window.addEventListener('scroll', (e) => {
          if ((window.scrollY + window.innerHeight) >= document.body.scrollHeight) {
              setPage( page => page + 1 );
          }
      }
    );

    return () => {
      window.removeEventListener('scroll', () => {})
    }

  } , []);


  React.useEffect( ()=>{
    getData(q, page);
  }, [q, page]);


  React.useEffect ( () => {
    //Fetch more data in case that initial load was too small for this viewport
    if (data.length > 0 && window.innerHeight >  document.body.scrollHeight){
      setPage( page => page + 1 );
    }
  } , [data]);

  return (
    <>
      <GithubCorner href={'https://github.com/nerychucuy/react-gif-browser'} bannerColor="#7f51fd" octoColor="#fff" size={80} direction="right" />
      <div style={{width:'80%', margin:'0 auto'}}>
        <SearchBar onSearch={doSearch} position={ q === null ? 'center' : 'top' }/>
        {noData && 
          <p>
            No results found. Try another word.
          </p>
        }
        {error !== null && 
          <p style={{color:'#ff0000'}}>
            {error}
          </p>
        }
        {data.length > 0 &&
          <GifGallery 
              data={data} 
              columns={GRID_COLUMNS}
            />
        }
        {loading && <Loader position={data.length > 0 ? 'fixed' : 'floating'}/>}
      </div>
    </>
  );
}

export default App;
