import './NotFound.css';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

import iconNotFound from '../../images/icon-not-found.svg';
import { websiteLink, webPageNotFoundName } from '../../utils/constants';

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = webPageNotFoundName;
  }, []);

  return(
    <div className='not-found'>
      <img className='not-found__img' src={iconNotFound} alt='Знак ошибки'></img>
      <div className='not-found__code-info'>
        <h2 className='not-found__code'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <p className='not-found__description'>Адрес запрашиваемой страницы: <span className='not-found__location-link'>{`${websiteLink}${location.pathname}`}</span></p>
      <Link reloadDocument to='/krepdver' className='not-found__link'>Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFound;
