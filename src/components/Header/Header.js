import './Header.css';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import sdek from '../../images/icon-sdek.svg';

import Contacs from '../Contacs/Contacs';

import { headerRouters } from '../../utils/constants';
import { productsRouters } from '../../utils/productsList';

function Header({ isCartFull, handleComponentVisible, handleNavMenuVisible }) {
  const [myRouters, setMyRouters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setMyRouters([...productsRouters, ...headerRouters]);
  }, []);

  return (
    handleComponentVisible(myRouters, location) && (
      <header className='header'>
        <div className='header__container'>
          <img className='header__logo' src={logo} alt='Логотип' title='Логотип'></img>
          <div className='header__column-delivery'>
            <img
              className='header__icon-delivery'
              src={sdek}
              alt='Иконка доставки'
              title='Доставка'
            ></img>
            <p className='header__text-delivery'>Доставка по СДЭК</p>
            <p className='header__text-delivery'>Самовывоз по Москве и Московской области</p>
          </div>
          <Contacs />
        </div>
        <div className='header__container-mobile'>
          <Link
            to='/cart'
            className={`header__btn-cart ${isCartFull ? 'header__btn-cart_type_full' : ''}`}
          />
          <img className='header__logo' src={logo} alt='Логотип' title='Логотип'></img>
          <a href='tel:+79263677030' className='header__link header__link_type_tel'>
            tel:+79263677030
          </a>
          <a href='mailto:krepdver@yandex.ru' className='header__link header__link_type_email'>
            mailto:krepdver@yandex.ru
          </a>
          <button
            type='button'
            className='header__btn-menu'
            onClick={handleNavMenuVisible}
          ></button>
        </div>
      </header>
    )
  );
}

export default Header;
