import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const bringPokemons= ()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
      };

  return (
    <div className="App">
      <button onClick={bringPokemons}>Fetch pokemon</button>
      {pokemons?
      <ul>
        
        { pokemons.map((person, index)=>{
                  return (<li key={index}>{person.name}</li>)
              })}
      </ul>:''}

    </div>
  );
}

export default App;
