import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import GifGallery from './Components/GifGallery';
import Loader from './Components/Loader';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const PAGE_SIZE = 25;
const GRID_COLUMNS = 6;

const App = () => {

  const [data, setData] = React.useState([]);
  const [q, setQ] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  const [noData, setNoData] = React.useState(false);

  const getData = ( q, page = 0) => {
    
    if (q === null || page * PAGE_SIZE > total ) return;

    setLoading(true); 

    console.log(page);

    window.fetch(`${API_URL}?api_key=${API_KEY}&q=${q}&limit=${PAGE_SIZE}&offset=${PAGE_SIZE*page}`)
      .then( response => response.json() )
      .then( json => {
        setLoading(false);
        setTotal(json.pagination.total_count);
        setNoData( json.data.length === 0 );
        setData( data => {
          if (page === 0) return json.data;
          return data.concat(json.data);
        })
      })
      .catch( error => { 
          console.log(`Error: ${error}`) 
          setLoading(false);
    } );

  }

  const doSearch = (searchTerm) => {
    setPage(0);
    setData([]);
    setQ(searchTerm);
  } 

  React.useEffect( () => {

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
    if (data.length > 0 && window.innerHeight >  document.body.scrollHeight){
      setPage( page => page + 1 );
    }
  } , [data]);

  return (
    <div style={{width:'80%', margin:'0 auto'}}>
      <SearchBar onSearch={doSearch} position={ q === null ? 'center' : 'top' }/>
      {noData && 
        <p>
          No results found. Try another word.
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
  );
}

export default App;
