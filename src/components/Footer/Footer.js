import './Footer.css';
import { useState, useEffect } from 'react';

import { webPageNotFoundName } from '../../utils/constants';

import logo from '../../images/logo.png';
import youtube from '../../images/youtube.svg';
import whatsapp from '../../images/whatsapp.svg';

import Contacs from '../Contacs/Contacs';

function Footer() {
  // fix: мерцание компонента во время перехода по роуту, где он не должен отображаться
  const [isHidden, setIsHidden] = useState(undefined);

  useEffect(() => {
    if(document.title === webPageNotFoundName) {
      return setIsHidden(true);
    }

    setIsHidden(false);
  }, []);

  return (
    isHidden === false &&
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__column-view'>
          <img className='footer__logo' src={logo} alt='Логотип'></img>
          <p className='footer__copyright'>&#169; 2022 Все права защищены.</p>
        </div>
        <div className='footer__columns'>
          <nav className='footer__column-links'>
            <a className='footer__link' href='#/' target='_blank'>
              <img
                className='footer__img-link'
                src={youtube}
                alt='Иконка ютуб'
              ></img>
              <p className='footer__text-link'> Youtube</p>
            </a>
            <a className='footer__link' href='#/' target='_blank'>
              <img
                className='footer__img-link'
                src={whatsapp}
                alt='Иконка ватсапп'
              ></img>
              <p className='footer__text-link'> Whatsapp</p>
            </a>
          </nav>
          <Contacs />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
