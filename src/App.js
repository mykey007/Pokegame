import React from 'react';
import logo from './logo.svg';
import Cat from './Cat';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cat/>
        <h1>Pokedex</h1>
      </header>
      <section className="flexer">
        <Pokedex/>
      </section>

    </div>
  );
}

export default App;
