import { useEffect, useState } from 'react';
import './App.css';
import ScoreHeader from './components/ScoreHeader';
import GameLogic from './components/GameLogic';
import Rules from './components/Rules';
import MoveSelection from './components/MoveSelection';

function App() {
  const [showRules, setShowRules] = useState(false);

  // declare score useState with a callback function to retreive score from local storage if its present
  const [score, setScore] = useState(() => {
    const localScore = localStorage.getItem('score');
    return localScore ? parseInt(localScore) : 0;
  });
  const [playerMove, setPlayerMove] = useState('');

  // update store in local storage when ever score is updated in app
  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  return (
    <div className='app'>
      <ScoreHeader
        score={score}
        setScore={setScore}
        setPlayerMove={setPlayerMove}
      />

      {/* show gamelogic component once playerMove is set (player makes a move)  */}

      {!playerMove ? (
        <MoveSelection setPlayerMove={setPlayerMove} />
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
