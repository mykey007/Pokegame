import React from 'react';
import Cat from './Cat';
import './App.css';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Pokedex</h1></div>
      </header>
        <Pokegame/>
    </div>
  );
}

export default App;
