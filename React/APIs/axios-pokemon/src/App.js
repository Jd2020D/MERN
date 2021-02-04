import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const showPokemon=() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.data)
    .then(response=> setPokemons(response.results))
  
  };

      

  return (
    <div className="App">
      <button onClick={(e)=>showPokemon()}>Fetch pokemon</button>
      <ul>
        
        { pokemons.map((person, index)=>{
                  return (<li key={index}>{person.name}</li>)
              })}
      </ul>

    </div>
  );
}

export default App;
