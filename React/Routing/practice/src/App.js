import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import WordComponent from './Components/WordComponent';
import HelloComponent from './Components/HelloComponent';
function App() {
  return (
    <div className="App">
        <Router>
          <WordComponent path="/:word"/>
          <WordComponent path="/:word/:color/:backGroundColor"/>
        </Router>
    </div>
  );
}

export default App;
