import { useEffect, useState } from 'react';
import './App.css';
import ScoreHeader from './components/ScoreHeader';
import MainGameArea from './components/MoveSelection';
import GameLogic from './components/GameLogic';
import Rules from './components/Rules';

function App() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [playerMove, setPlayerMove] = useState('');

  return (
    <div className='app'>
      <ScoreHeader score={score} />

      {!playerMove ? (
        <MainGameArea setPlayerMove={setPlayerMove} />
      ) : (
        <GameLogic
          playerMove={playerMove}
          setScore={setScore}
          setPlayerMove={setPlayerMove}
        />
      )}

      <button
        onClick={() => setShowRules((prevState) => !prevState)}
        className='rules-btn'>
        RULES
      </button>
      {showRules && <Rules setShowRules={setShowRules} />}
    </div>
  );
}

export default App;
