import React, { Component } from 'react';
import './App.css';
import Player from './PlayerCard';
import './index.css';
import Iniesta from './images/iniesta.jpeg';
import Unknown from './images/Unknown.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Player name="Andres Iniesta" move="La Croqueta" image={Iniesta} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
          <Player name="?" image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>



      </div>
    );
  }
}

export default App;
