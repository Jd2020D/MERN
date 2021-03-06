import { Router } from '@reach/router';
import './App.css';
import PeopleComponent from './Components/PeopleComponent';
import PlanetComponent from './Components/PlanetComponent';
import FilmComponent from './Components/FilmComponent';
import SearchFormComponent from './Components/SearchFormComponent';
import SpeciesComponent from './Components/SpeciesComponent'
import React,{useState,useEffect} from 'react';

function App() {
  console.log("render app")
  return (
    <div className="App">
          <SearchFormComponent />
        <Router>
          <PeopleComponent path="/people/:id/"/>
          <PlanetComponent path="/planets/:id/"/>
          <FilmComponent  path="/films/:id/"/>
          <SpeciesComponent  path="/species/:id/"/>
        </Router>

    </div>
  );
}

export default App;
