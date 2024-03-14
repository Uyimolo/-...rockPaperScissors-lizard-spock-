const Move = ({ img, name, setUserMove }) => {
  console.log(name)
  return (
    <div className={`move-container ${name}`} onClick={()=> setUserMove(name)}>
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

export default Move;
