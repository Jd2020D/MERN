import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const showPokemons=() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
      };

  return (
    <div className="App">
      <button onClick={(e)=>showPokemons()}>Fetch pokemon</button>
      <ul>
        
        { pokemons.map((person, index)=>{
                  return (<li key={index}>{person.name}</li>)
              })}
      </ul>

    </div>
  );
}

export default App;
