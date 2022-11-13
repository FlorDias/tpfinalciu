import './App.css';
import Navbar from './components/Navbar';
import React, {useEffect, useState} from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState([]);
  
  const inicialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) => { // Hook para llamada a la api
    fetch (url)
    .then((response) => response.json())
    .then((data) => setCharacters(data.results))
    .catch((error) => console.log(error))

  };

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, [])

  return (
    <div>
      <Navbar/>
      <div className ="container mt-5">
        <Characters characters={characters}/>
      </div>
    </div>
  );
}

export default App;
