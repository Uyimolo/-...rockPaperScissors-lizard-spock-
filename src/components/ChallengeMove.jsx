const ChallengeMove = ({ img, name }) => {
  return (
    <div className={`challenge-move move-container ${name}`}>
      <div className='move'>
        <div className='inner-circle'>
          <img src={img} alt={name} />
        </div>
      </div>
      {/* used this div to simulate a hard shadow */}
      <div className='hard-shadow-effect'></div>
    </div>
  );
};

export default ChallengeMove;
