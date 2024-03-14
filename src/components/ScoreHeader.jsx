import React from 'react'

const ScoreHeader = ({score}) => {
  return (
    <div className='score-header'>
      <div className='options-list'>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
        <p>LIZARD</p>
        <p>SPOCK</p>
      </div>
      <div className="score">
        <p>SCORE</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
}

export default ScoreHeader
