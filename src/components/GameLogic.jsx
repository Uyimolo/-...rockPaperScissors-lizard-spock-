import React from 'react';

import movesArr from '../arrays/movesArr';
import ChallengeMove from './ChallengeMove';

const GameLogic = ({ userMove }) => {
  console.log();
  const userChallengeMove = movesArr.filter((move) => move.name === userMove);

  console.log('userMove', userChallengeMove);

  return (
    <div>
      <div className='game-logic-container'>
        <div className='challengers'>
          <div className='player'>
            <ChallengeMove
              img={userChallengeMove[0].img}
              name={userChallengeMove[0].name}
            />
            <h2>YOU PICKED</h2>
          </div>
          <div className='com-player player'>
            <ChallengeMove
              img={userChallengeMove[0].img}
              name={userChallengeMove[0].name}
            />

            <h2>THE HOUSE PICKED</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLogic;
