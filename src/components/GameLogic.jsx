import React, { useEffect, useState, useRef } from 'react';

import movesArr from '../arrays/movesArr';
import ChallengeMove from './ChallengeMove';
import moveDominance from '../arrays/moveDominance';

const GameLogic = ({ playerMove, setPlayerMove, setScore }) => {
  const [gameResult, setGameResult] = useState('');
  const [theHouseMove, setTheHouseMove] = useState(null);
  const playerGameMove = movesArr.filter((move) => move.name === playerMove);

  useEffect(() => {
    handleDominance();
  }, [theHouseMove]);

  useEffect(() => {
    const suspense = setTimeout(() => {
      handleRandomHouseMove();
    }, 2000);
    return () => clearTimeout(suspense);
  }, [playerMove]);

  function handleRandomHouseMove() {
    const randomIndex = Math.floor(Math.random() * movesArr.length);
    setTheHouseMove(movesArr[randomIndex]);
  }

  function handleDominance() {
    if (theHouseMove) {
      if (
        playerMove === theHouseMove.name &&
        !moveDominance[playerMove].includes(theHouseMove)
      ) {
        setGameResult('Its a tie');
      } else if (moveDominance[playerMove].includes(theHouseMove.name)) {
        setGameResult('You win');
        setScore((prevScore) => prevScore + 1);
      } else if (!moveDominance[playerMove].includes(theHouseMove.name)) {
        setGameResult('You lose');
        setScore((prevScore) => prevScore - 1);
      }
    }
  }

  return (
    <div>
      <div className='game-logic-container'>
        <div className='challengers'>
          <div className='player'>
            <ChallengeMove
              img={playerGameMove[0].img}
              name={playerGameMove[0].name}
            />
            <h2>YOU PICKED</h2>
          </div>
          { gameResult && <div className='result-play-again'>
            <h1>{gameResult.toUpperCase()}</h1>
            <button onClick={() => setPlayerMove('')}>PLAY AGAIN</button>
          </div>}
          <div className='com-player player'>
            {theHouseMove ? (
              <ChallengeMove img={theHouseMove.img} name={theHouseMove.name} />
            ) : (
              <div className='the-house-placeholder'>
                <div className=''></div>
              </div>
            )}
            <h2>THE HOUSE PICKED</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLogic;
