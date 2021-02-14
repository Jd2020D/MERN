import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route, // for later
  Switch
} from 'react-router-dom'
import AuthorsTable from './views/AuthorsTable';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import Main from './views/Main';
import Players from './components/Players';
import PlayersList from './components/PlayersList';
function App() {
  return (
    <Router>
      <div className="App">
        <Main/>

      </div>
    </Router>
  );
}
export default App;