import './Header.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';

import Contacs from '../Contacs/Contacs';

import { productsRouters, headerRouters } from '../../utils/constants';

function Header({ handleComponentVisible }) {
  const [myRouters, setMyRouters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setMyRouters([...productsRouters, ...headerRouters]);
  }, []);

  return(
    handleComponentVisible(myRouters, location) &&
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
