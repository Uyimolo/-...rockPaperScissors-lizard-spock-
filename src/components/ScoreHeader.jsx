import resetIcon from '../assets/images/reset-icon.svg';

const ScoreHeader = ({ score, setScore, setPlayerMove }) => {
  const handleGameReset = () => {
    setScore(0);
    setPlayerMove('');
  };
  return (
    <div className='score-header'>
      <div className='options-list'>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
        <p>LIZARD</p>
        <p>SPOCK</p>
      </div>
      {score !== 0 && (
        <img
          src={resetIcon}
          alt='reset'
          className='reset-icon'
          onClick={handleGameReset}
        />
      )}
      <div className='score'>
        <p>SCORE</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
};

export default ScoreHeader;
