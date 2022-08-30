import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return(
    <div className='navigation'>
      <nav className='navigation__container'>
        <Link to='/' className='navigation__link'>Главная</Link>
        <Link to='/cart' className='navigation__link'>Корзина</Link>
        <Link to='/' className='navigation__link' state={{scrollMain: 'complete-sets'}}>Каталог</Link>
        <Link to='/' className='navigation__link' state={{scrollMain: 'video'}}>Видео</Link>
        <Link to='/' className='navigation__link' state={{scrollMain: 'map'}}>Карта</Link>
      </nav>
    </div>
  );
}

export default Navigation;
