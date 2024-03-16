import React, { useState } from 'react';
import Move from './Move';

import movesArr from '../arrays/movesArr';

const MoveSelection = ({ setPlayerMove }) => {
 

  return (
    <div className='main-game-area'>
      <div className='moves'>
        {/*tip:position each move absolutely */}
        <div className='pentagon'></div>
        {movesArr.map((move) => (
          <Move
            key={move.name}
            img={move.img}
            name={move.name}
            setPlayerMove={setPlayerMove}
          />
        ))}
      </div>

      <div className='rules-btn-container'>
        
      </div>
    </div>
  );
};

export default MoveSelection;
