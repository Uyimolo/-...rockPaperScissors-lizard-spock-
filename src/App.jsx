import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ScoreHeader from './components/ScoreHeader';
import MainGameArea from './components/MainGameArea';

function App() {
  const [score, setScore] = useState(0); 

  return (
    <div className='app'>
      <ScoreHeader score={score} />
      <MainGameArea />
    </div>
  );
}

export default App;
