import './Header.css';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';
import time from '../../images/icon-time.svg';
import phone from '../../images/icon-phone.svg';
import email from '../../images/icon-email.svg';

function Header() {
  return(
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип'></img>
      <div className='header__column-delivery'>
        <img className='header__icon-delivery' src={sdek} alt='Иконка доставки'></img>
        <p className='header__text-delivery'>Доставка по СДЭК</p>
        <p className='header__text-delivery'>Самовывоз по Москве и Московской области</p>
      </div>
      <div className='header__column-contacs'>
        <img className='header__icon-contacs' src={time} alt='Иконка часов'></img>
        <p className='header__text-contacs'>Пн-Во 8:00-20:00</p>
        <img className='header__icon-contacs' src={phone} alt='Иконка телефона'></img>
        <p className='header__text-contacs'>+7 (926) 367-70-30</p>
        <img className='header__icon-contacs' src={email} alt='Иконка почты'></img>
        <p className='header__text-contacs'>krepdver@yandex.ru</p>
      </div>
    </header>
  );
}

export default Header;
