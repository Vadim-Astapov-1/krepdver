import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import { productsList } from '../../utils/constants';

function App() {
  function handleComponentVisible(routers, location) {
    return routers.some((item) => item === location.pathname);
  }

  function handleCardSubmit({ name, count, price }) {
    console.log(`Добавлен товар в корзину ${name} ${count} шт, цена: ${price}`);
  }

  return (
    <div className='app'>
      <Header handleComponentVisible={handleComponentVisible} />
      <Routes>
        <Route exact path='/' element={<Main handleCardSubmit={handleCardSubmit} />} />
        {productsList.map((item) => <Route path={`/products/${item.id}`} key={item.id} element={<Product />}/>)}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer handleComponentVisible={handleComponentVisible} />
    </div>
  );
}

// Link не рендерит компонент, только переводит на роут.
// В следствие чего, сложно отследить местонахождение для компонентов,
// которые отрисовываются по условию местонахождения.
// Fix: reloadDocument для Link, чтобы страница перезагружалась.


export default App;
