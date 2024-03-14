import { useEffect, useState } from 'react';
import './App.css';
import ScoreHeader from './components/ScoreHeader';
import MainGameArea from './components/MainGameArea';
import GameLogic from './components/GameLogic';

function App() {
  const [score, setScore] = useState(12);
  const [userMove, setUserMove] = useState('');
  // useEffect(() => {
  //   console.log(userMove);
  // }, [userMove]);
  return (
    <div className='app'>
      <ScoreHeader score={score} />
      {!userMove ? <MainGameArea setUserMove={setUserMove} /> : <GameLogic userMove={userMove}/>}
    </div>
  );
}

export default App;
