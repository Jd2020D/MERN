import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
 
function App() {
  const [socket] = useState(() => io(':8000'));
  const anyMethod =()=>{
    console.log("clickd")
    socket.on('Welcome', data => {
      console.log(data)
    });

  }
  useEffect(() => {
    socket.on('Welcome', data => {
      console.log(data)
    });

    return () => socket.disconnect(true);

  }, []);
 
  return (
    <div className="App">
      <h1>Socket Test</h1>
      <button onClick={anyMethod}></button>
    </div>
  );
}
 
export default App;