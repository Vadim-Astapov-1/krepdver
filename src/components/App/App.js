import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';

import { productsList } from '../../utils/productsList';

function App() {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [cartList, setCartList] = useState([]);
  const location = useLocation();

  function handleNavMenuVisible() {
    if (isMenuHidden) {
      setIsMenuHidden(false);
    } else {
      setIsMenuHidden(true);
    }
  }

  function handleComponentVisible(routers, location) {
    return routers.some((item) => item === location.pathname);
  }

  function handleCardSubmit(card) {
    if (!cartList.some((item) => item.id === card.id)) {
      return setCartList([...cartList, card]);
    }

    setCartList(
      cartList.map((item) => {
        if (item.id === card.id) {
          return { ...item, count: item.count + card.count };
        }

        return item;
      })
    );
  }

  function handleChangeCountItemCart(id, counts) {
    setCartList(
      cartList.map((item) => {
        if (item.id === id) {
          return { ...item, count: counts };
        }

        return item;
      })
    );
  }

  function handleDeleteItemCart(id) {
    setCartList(cartList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    setIsMenuHidden(true);
  }, [location.pathname]);

  return (
    <div className='app'>
      <Helmet prioritizeSeoTags>
        <title>Крепежы для установки межкомнатных дверей в Москве</title>
        <meta
          name='description'
          content='Специальные монтажные комплекты для профессиональной установки межкомнатных дверей. Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!'
        />
        <meta property='og:title' content='Крепежы для установки межкомнатных дверей в Москве' />
        <meta
          property='og:description'
          content='Специальные монтажные комплекты для профессиональной установки межкомнатных дверей. Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://krepdver.ru' />
      </Helmet>
      <Header
        handleComponentVisible={handleComponentVisible}
        handleNavMenuVisible={handleNavMenuVisible}
      />
      <Routes>
        <Route exact path='/' element={<Main handleCardSubmit={handleCardSubmit} />} />
        <Route
          path='/cart'
          element={
            <Cart
              itemList={cartList}
              handleChangeCountItemCart={handleChangeCountItemCart}
              handleDeleteItemCart={handleDeleteItemCart}
            />
          }
        ></Route>
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
      <SideBar isHidden={isMenuHidden} handleNavMenuVisible={handleNavMenuVisible} />
    </div>
  );
}

export default App;
