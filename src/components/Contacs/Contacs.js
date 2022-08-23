import './Contacs.css';

import time from '../../images/icon-time.svg';
import phone from '../../images/icon-phone.svg';
import email from '../../images/icon-email.svg';

const Contacs = () => (
  <div className='contacs'>
      <img className='contacs__icon' src={time} alt='Иконка часов'></img>
      <p className='contacs__text'>Пн-Во 8:00-20:00</p>
      <img className='contacs__icon' src={phone} alt='Иконка телефона'></img>
      <a href='tel:+79263677030' className='contacs__text contacs__text_type_link'>+7 (926) 367-70-30</a>
      <img className='contacs__icon' src={email} alt='Иконка почты'></img>
      <a href='mailto:krepdver@yandex.ru' className='contacs__text contacs__text_type_link'>krepdver@yandex.ru</a>
    </div>
);

export default Contacs;
