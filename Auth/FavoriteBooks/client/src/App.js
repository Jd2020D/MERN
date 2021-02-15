import React from 'react';
import { Router } from '@reach/router';
import AuthorsTable from './views/AuthorsTable';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';
function App() {
  return (
    <div className="App">
          <Router>
            <AuthorsTable path="/"  />
            <CreateAuthor path="/new"/>
            <UpdateAuthor path="/edit/:id" />
          </Router>
    </div>
  );
}
export default App;