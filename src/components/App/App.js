import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import { productsList } from '../../utils/constants';

function App() {
  const location = useLocation();

  function handleComponentVisible(routers, location) {
    return routers.some((item) => item === location.pathname);
  }

  function handleCardSubmit({ name, count, price }) {
    console.log(`Добавлен товар в корзину ${name} ${count} шт, цена: ${price}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='app'>
      <Header handleComponentVisible={handleComponentVisible} />
      <Routes>
        <Route exact path='/' element={<Main handleCardSubmit={handleCardSubmit} />} />
        {productsList.map((item) => <Route path={`/product/${item.id}`} key={item.id} element={<Product article={item.article} name={item.name} price={item.price} description={item.description} img={item.img} onAddInCart={handleCardSubmit} shortInfo={item.shortInfo} propertyList={item.propertyList} packageInfo={item.packageInfo} notice={item.notice ? item.notice : null} />}/>)}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer handleComponentVisible={handleComponentVisible} />
    </div>
  );
}

export default App;
