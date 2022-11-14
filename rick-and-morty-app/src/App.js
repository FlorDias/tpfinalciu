import './App.css';
import Navbar from './components/Navbar';
import React, {useEffect, useState} from 'react';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {

  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});
  
  const inicialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) => { // Hook para llamada a la api
    fetch (url)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch((error) => console.log(error));

  };

const onPrevius = () => {
  fetchCharacters(info.prev);
}

const onNext = () => {
  fetchCharacters(info.next);  
}

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, [])

  return (
    <div>
      <Navbar/>
      <div className ="container mt-5">
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevius={onPrevius}
          onNext={onNext}
        />
        <Characters characters={characters}/>
        <Pagination
          prev={info.prev} 
          next={info.next} 
          onPrevius={onPrevius}
          onNext={onNext}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
