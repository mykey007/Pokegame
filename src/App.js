import React from 'react';
import Cat from './Cat';
import './App.css';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Pokemon: <br/>Rock, Paper, <br/>Scissor Sisters</h1>
          <h2>Refresh to see the winning team!!</h2>
        </div>
      </header>
        <Pokegame/>
    </div>
  );
}

export default App;
