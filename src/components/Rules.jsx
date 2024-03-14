import rulesImg from '../assets/images/image-rules-bonus.svg';
import closeIcon from '../assets/images/icon-close.svg';

const Rules = ({setShowRules}) => {
  return (
    <div className='rules'>
      <h1>RULES</h1>
      <img src={rulesImg} alt='' className='rules-img' />
      <img src={closeIcon} alt="" className="close-btn" onClick={()=> setShowRules(prevState => !prevState)} />
    </div>
  );
};

export default Rules;
