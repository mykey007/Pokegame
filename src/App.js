import React from 'react';
import Cat from './Cat';
import './App.css';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="blinker">
        <div className="button"></div>
          <h1>Pokemon: <br/>Rock, Paper, <br/>Scissor Sisters</h1>
          <div className="button"><h2>Refresh Page</h2></div>
        </div>
      </header>
        <Pokegame/>
    </div>
  );
}

export default App;
