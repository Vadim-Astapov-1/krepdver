import './SideBar.css';
import { useLocation, Link } from 'react-router-dom';

function SideBar({ isHidden, handleNavMenuVisible }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${!isHidden ? 'sidebar_visible' : ''}`}>
      <nav className='sidebar__menu'>
        <Link
          to='/'
          className={`sidebar__link ${location.pathname === '/' ? 'sidebar__link_active' : ''}`}
          onClick={handleNavMenuVisible}
        >
          Главная
        </Link>
        <Link
          to='/cart'
          className={`sidebar__link ${location.pathname === '/cart' ? 'sidebar__link_active' : ''}`}
          onClick={handleNavMenuVisible}
        >
          Корзина
        </Link>
        <Link
          to='/'
          className='sidebar__link'
          state={{ scrollMain: 'complete-sets' }}
          onClick={handleNavMenuVisible}
        >
          Каталог
        </Link>
        <Link
          to='/'
          className='sidebar__link'
          state={{ scrollMain: 'video' }}
          onClick={handleNavMenuVisible}
        >
          Видео
        </Link>
        <Link
          to='/'
          className='sidebar__link'
          state={{ scrollMain: 'map' }}
          onClick={handleNavMenuVisible}
        >
          Карта
        </Link>
      </nav>
      <button className='sidebar__btn-close' onClick={handleNavMenuVisible}></button>
    </div>
  );
}

export default SideBar;
