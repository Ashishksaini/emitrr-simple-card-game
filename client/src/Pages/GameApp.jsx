import React, { useEffect, useState } from 'react'
import './GameApp.css'
import Card from '../components/Card';
import GameEnd from '../components/GameEnd';
import Explosion from '../components/Explosion';
import YouWon from '../components/YouWon';

const GameApp = () => {
  const [over, setOver] = useState(0);

  return (
    <div className="gameApp">
      {over == 0 && <Card setOver={setOver} />}
      {over == 1 && <Explosion/>}
      {over == 2 && <YouWon/>}
    </div>
  );
}

export default GameApp