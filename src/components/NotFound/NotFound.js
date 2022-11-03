import './NotFound.css';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import iconNotFound from '../../images/icon-not-found.svg';
import { websiteLink } from '../../utils/constants';

function NotFound() {
  const location = useLocation();

  return (
    <div className='not-found'>
      <Helmet prioritizeSeoTags>
        <meta name='robots' content='noindex, nofollow' />
        <meta name='prerender-status-code' content='404' />
        <title>Страница не найдена</title>
      </Helmet>
      <img className='not-found__img' src={iconNotFound} alt='Знак ошибки' title='Ошибка'></img>
      <div className='not-found__code-info'>
        <h1 className='not-found__code'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
      </div>
      <p className='not-found__description'>
        Адрес запрашиваемой страницы:{' '}
        <span className='not-found__location-link'>{`${websiteLink}${location.pathname}`}</span>
      </p>
      <Link to='/' className='not-found__link'>
        Вернуться на главную страницу
      </Link>
    </div>
  );
}

export default NotFound;
