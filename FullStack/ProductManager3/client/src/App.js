import React from 'react';
import { Router } from '@reach/router';
import ProductDetail from './views/ProductDetail'
import ProductUpdate from './views/ProductUpdate'
import Main from './views/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path="/:id" />
        <ProductUpdate path="/:id/edit" />
      </Router>
    </div>
  );
}
export default App;