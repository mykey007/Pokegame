import React from 'react';
import Cat from './Cat';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Pokedex</h1></div>
      </header>
        <Pokedex/>
    </div>
  );
}

export default App;
