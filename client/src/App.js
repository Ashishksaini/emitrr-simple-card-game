import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import GameApp from './Pages/GameApp';
import BombBlast from './components/Explosion';
import Explosion from './components/Explosion';
import { useState } from 'react';
import Home from './Pages/Home';
import MainScreen from './Pages/MainScreen';

function App() {
  return (
    <div className="App">
      <GameApp />
      {/* <Home /> */}
      {/* <MainScreen/> */}
    </div>
  );
}

export default App;