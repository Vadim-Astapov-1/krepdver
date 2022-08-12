import './Header.css';
import { useEffect, useState } from 'react';

import { webPageNotFoundName } from '../../utils/constants';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';

import Contacs from '../Contacs/Contacs';

function Header() {
  // fix: мерцание компонента во время перехода по роуту, где он не должен отображаться
  const [isHidden, setIsHidden] = useState(undefined);

  useEffect(() => {
    if(document.title === webPageNotFoundName) {
      return setIsHidden(true);
    }

    setIsHidden(false);
  }, []);

  return(
    isHidden === false &&
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
