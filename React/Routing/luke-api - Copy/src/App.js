import { Router } from '@reach/router';
import './App.css';
import PeopleComponent from './Components/PeopleComponent';
import PlanetComponent from './Components/PlanetComponent';
import FilmComponent from './Components/FilmComponent';
import SearchFormComponent from './Components/SearchFormComponent';
import SpeciesComponent from './Components/SpeciesComponent'
import React,{useState,useEffect} from 'react';

function App() {
  const [currentInfo,setCurrentInfo]=useState({searchIn:'people',id:''});
  console.log("render app",currentInfo)
  return (
    <div className="App">
          <SearchFormComponent info={currentInfo}/>
        <Router>
          <PeopleComponent info={setCurrentInfo} path="/people/:id/"/>
          <PlanetComponent info={setCurrentInfo} path="/planets/:id/"/>
          <FilmComponent info={setCurrentInfo} path="/films/:id/"/>
          <SpeciesComponent info={setCurrentInfo} path="/species/:id/"/>
        </Router>

    </div>
  );
}

export default App;
