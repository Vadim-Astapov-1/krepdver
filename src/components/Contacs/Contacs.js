import './Contacs.css';

import time from '../../images/icon-time.svg';
import phone from '../../images/icon-phone.svg';
import email from '../../images/icon-email.svg';

const Contacs = () => (
  <div className='contacs'>
      <img className='contacs__icon' src={time} alt='Иконка часов'></img>
      <p className='contacs__text'>Пн-Во 8:00-20:00</p>
      <img className='contacs__icon' src={phone} alt='Иконка телефона'></img>
      <p className='contacs__text'>+7 (926) 367-70-30</p>
      <img className='contacs__icon' src={email} alt='Иконка почты'></img>
      <p className='contacs__text'>krepdver@yandex.ru</p>
    </div>
);

export default Contacs;
