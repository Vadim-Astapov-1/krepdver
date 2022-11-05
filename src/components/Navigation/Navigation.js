import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <div className='navigation'>
      <nav className='navigation__container'>
        <Link
          to='/'
          className={`navigation__link ${
            location.pathname !== '/cart' ? 'navigation__link_active' : ''
          }`}
        >
          Главная
        </Link>
        <Link
          to='/cart'
          className={`navigation__link ${
            location.pathname === '/cart' ? 'navigation__link_active' : ''
          }`}
        >
          Корзина
        </Link>
        <Link to='/' className='navigation__link' state={{ scrollMain: 'complete-sets' }}>
          Каталог
        </Link>
        <Link to='/' className='navigation__link' state={{ scrollMain: 'video' }}>
          Видео
        </Link>
        <Link to='/' className='navigation__link' state={{ scrollMain: 'map' }}>
          Карта
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
