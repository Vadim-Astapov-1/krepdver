import './Header.css';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';

import Contacs from '../Contacs/Contacs';

import { headerRouters } from '../../utils/constants';
import { productsRouters } from '../../utils/productList';

function Header({ handleComponentVisible, handleNavMenuVisible }) {
  const [myRouters, setMyRouters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setMyRouters([...productsRouters, ...headerRouters]);
  }, []);

  return(
    handleComponentVisible(myRouters, location) &&
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='Логотип'></img>
        <div className='header__column-delivery'>
          <img className='header__icon-delivery' src={sdek} alt='Иконка доставки'></img>
          <p className='header__text-delivery'>Доставка по СДЭК</p>
          <p className='header__text-delivery'>Самовывоз по Москве и Московской области</p>
        </div>
      <Contacs />
      </div>
      <div className='header__container-mobile'>
        <Link to='/cart' className='header__btn-cart' />
        <img className='header__logo' src={logo} alt='Логотип'></img>
        <a href='tel:+79263677030' className='header__link header__link_type_tel'></a>
        <a href='mailto:krepdver@yandex.ru' className='header__link header__link_type_email'></a>
        <button type='button' className='header__btn-menu' onClick={handleNavMenuVisible}></button>
      </div>
    </header>
  );
}

export default Header;
