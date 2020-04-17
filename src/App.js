import React from 'react';
import logo from './logo.svg';
import Cat from './Cat';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
        <Pokedex/>
    </div>
  );
}

export default App;
