import React from 'react';
import { Router } from '@reach/router';
import ProductDetail from './views/ProductDetail'
import Main from './views/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path="/:id" />
      </Router>
    </div>
  );
}
export default App;