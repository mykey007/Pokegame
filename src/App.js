import React from 'react';
import logo from './logo.svg';
import Cat from './Cat';
import './App.css';
import PokeCard from './PokeCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cat/>
        <h1>Pokedex</h1>
      </header>
      <section className="flexer">
        <PokeCard id={4} name="Charmander" type="fire" exp={62}/>

        {/* <PokeCard
          name=""
          image=""
          type=""
          exp=""
        />

        <PokeCard
          name=""
          image=""
          type=""
          exp=""
        />

        <PokeCard
          name=""
          image=""
          type=""
          exp=""
        /> */}
      </section>

    </div>
  );
}

export default App;
