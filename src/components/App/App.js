import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import NotFound from '../NotFound/NotFound';

import { productsList } from '../../utils/productsList';

function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const location = useLocation();

  function handleNavMenuVisible() {
    if(isMenuHidden) {
      setIsMenuHidden(false);
    } else {
      setIsMenuHidden(true);
    }
  }

  function handleComponentVisible(routers, location) {
    return routers.some((item) => item === location.pathname);
  }

  function handleCardSubmit({ name, count, price }) {
    console.log(`Добавлен товар в корзину ${name} ${count} шт, цена: ${price}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuHidden(true);
  }, [location.pathname]);

  return (
    <div className='app'>
      <Header
        handleComponentVisible={handleComponentVisible}
        handleNavMenuVisible={handleNavMenuVisible}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={<Main handleCardSubmit={handleCardSubmit} />}
        />
        {productsList.map((item) => (
          <Route
            path={`/product/${item.id}`}
            key={item.id}
            element={
              <Product
                id={item.id}
                article={item.article}
                name={item.name}
                price={item.price}
                description={item.description}
                img={item.img}
                onAddInCart={handleCardSubmit}
                shortInfo={item.shortInfo}
                propertyList={item.propertyList}
                packageInfo={item.packageInfo}
                feature={item.feature ? item.feature : null}
              />
            }
          />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer handleComponentVisible={handleComponentVisible} />
      <SideBar
        isHidden={isMenuHidden}
        handleNavMenuVisible={handleNavMenuVisible}
      />
    </div>
  );
}

export default App;
