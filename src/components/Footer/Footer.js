import './Footer.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../../images/logo.png';
import youtube from '../../images/youtube.svg';
import whatsapp from '../../images/whatsapp.svg';

import Contacs from '../Contacs/Contacs';

import { footerRouters } from '../../utils/constants';
import { productsRouters } from '../../utils/productsList';

function Footer({ handleComponentVisible }) {
  const [myRouters, setMyRouters] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setMyRouters([...productsRouters, ...footerRouters]);
  }, []);

  return (
    handleComponentVisible(myRouters, location) && (
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__column-view'>
            <img className='footer__logo' src={logo} alt='Логотип' title='Логотип'></img>
            <p className='footer__copyright'>&#169; 2022 Все права защищены.</p>
          </div>
          <div className='footer__columns'>
            <nav className='footer__column-links'>
              <a className='footer__link' href='#/' target='_blank'>
                <img className='footer__img-link' src={youtube} alt='Иконка ютуб' title='WhatsApp'></img>
                <p className='footer__text-link'> Youtube</p>
              </a>
              <a className='footer__link' href='#/' target='_blank'>
                <img className='footer__img-link' src={whatsapp} alt='Иконка ватсапп' title='Youtube'></img>
                <p className='footer__text-link'> Whatsapp</p>
              </a>
            </nav>
            <Contacs />
          </div>
        </div>
      </footer>
    )
  );
}

export default Footer;
