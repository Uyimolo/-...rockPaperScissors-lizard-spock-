const Move = ({ img, name, setPlayerMove }) => {
  return (
    <div
      className={`move-container ${name}`}
      onClick={() => setPlayerMove(name)}>
      {/* used this div to simulate a hard shadow */}
      <div className='hard-shadow-effect'></div>
      <div className='move'>
        <div className='inner-circle'>
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Move;
