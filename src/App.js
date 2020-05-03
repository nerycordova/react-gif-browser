import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import GifTable from './Components/GifTable';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

  const [data, setData] = React.useState([]);

  const doSearch = (searchTerm) => {
    window.fetch(`${API_URL}?api_key=${API_KEY}&q=${searchTerm}`)
    .then( response => response.json() )
    .then( json => setData(json.data) )
    .catch( error => console.log(`Error: ${error}`) );
  } 

  return (
    <>
      <SearchBar onSearch={doSearch} />
      <GifTable data={data} />
    </>
  );
}

export default App;
