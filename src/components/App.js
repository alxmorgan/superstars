import React, { Component } from 'react';
import './App.css';
import Player from './PlayerCard';
import '../index.css';
import Iniesta from '../images/iniesta.jpeg';
import Ronaldo from '../images/ronaldo.jpeg';
import Unknown from '../images/Unknown.jpg';
import Messi from '../images/messi.jpg';

class App extends Component {
  render() {
    return (

      <div className="App">
          <div className="shadow" id="logo1">
              Super Star Moves
          </div>
          <div className="cards">
              <Player name="Cristiano Ronaldo" club="Juventus" move="Stepover" image={Ronaldo} link="https://v637g.app.goo.gl/k9TK5BhuYAGq58JYA"/>
              {/*<Player name="Andres Iniesta" club="Barcelona" move="La Croqueta" image={Iniesta} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>*/}
              <Player name="Lionel Messi" club="Barcelona" move="Body Feint" image={Messi} link="https://v637g.app.goo.gl/m8rQ6tTSzLVcpqEW7"/>
              <Player  image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
              <Player image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
              <Player image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
              <Player  image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>
              <Player  image={Unknown} link="https://www.youtube.com/embed/Wq-hhEUO4eM?start=20&end=25&version=3"/>


          </div>


      </div>
    );
  }
}

export default App;
