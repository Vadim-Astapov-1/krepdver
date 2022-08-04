import './Header.css';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';

import Contacs from '../Contacs/Contacs';

function Header() {
  return(
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип'></img>
      <div className='header__column-delivery'>
        <img className='header__icon-delivery' src={sdek} alt='Иконка доставки'></img>
        <p className='header__text-delivery'>Доставка по СДЭК</p>
        <p className='header__text-delivery'>Самовывоз по Москве и Московской области</p>
      </div>
      <Contacs />
    </header>
  );
}

export default Header;
