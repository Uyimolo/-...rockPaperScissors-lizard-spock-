import rulesImg from '../assets/images/image-rules-bonus.svg';
import closeIcon from '../assets/images/icon-close.svg';

const Rules = ({setShowRules}) => {
  return (
    <div className='rules'>
      <div>
        <h3>RULES</h3>
        <img src={rulesImg} alt='' className='rules-img' />
        <img
          src={closeIcon}
          alt=''
          className='close-btn'
          onClick={() => setShowRules((prevState) => !prevState)}
        />
      </div>
    </div>
  );
};

export default Rules;
