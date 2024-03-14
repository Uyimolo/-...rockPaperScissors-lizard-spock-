import React, { useState } from 'react';
import Move from './Move';

import movesArr from '../arrays/movesArr';
import Rules from './Rules';
const MainGameArea = ({ setUserMove }) => {
  const [showRules, setShowRules] = useState(false);

  // const handleUserChoice = (move) => {
  //   setUserMove(move)
  // }

  return (
    <div className='main-game-area'>
      <div className='moves'>
        <div className='pentagon'></div>
        {movesArr.map((move) => (
          <Move
            key={move.name}
            img={move.img}
            name={move.name}
            setUserMove={setUserMove}
          />
        ))}
      </div>

      <div className='rules-btn-container'>
        <button
          onClick={() => setShowRules((prevState) => !prevState)}
          className='rules-btn'>
          RULES
        </button>
      </div>
      {showRules && <Rules setShowRules={setShowRules} />}
    </div>
  );
};

export default MainGameArea;
