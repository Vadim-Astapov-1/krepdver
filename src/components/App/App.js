import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';
import CartButton from '../CartButton/CartButton';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import TooltipPopup from '../TooltipPopup/TooltipPopup';

import { productsList } from '../../utils/productsList';

function App() {
  const [isCartFull, setIsCartFull] = useState(false);
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [isAddInCart, setIsAddInCart] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupTypeError, setPopupTypeError] = useState(null);
  const [cartList, setCartList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

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

  function handlePopupLoader() {
    setPopupIsOpen(true);
    setPopupTypeError(null);
  }

  function handlePopupIsError(isError) {
    setPopupTypeError(isError);

    setTimeout(() => {
      setPopupIsOpen(false);
      if (!isError) {
        navigate('/');
      }
    }, 2000);
  }

  function handleCardSubmit(card) {
    handleMessageAddingInCart();

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

  function handleClearCart() {
    setCartList([]);
  }

  function handleFulledCart() {
    if (cartList.length !== 0) {
      return setIsCartFull(true);
    }

    setIsCartFull(false);
  }

  function handleMessageAddingInCart() {
    setIsAddInCart(true);

    setTimeout(() => setIsAddInCart(false), 1000);
  }

  useEffect(() => {
    setIsMenuHidden(true);
  }, [location.pathname]);

  useEffect(() => {
    handleFulledCart();
  }, [cartList]);

  return (
    <div className='app'>
      <Header
        isCartFull={isCartFull}
        handleComponentVisible={handleComponentVisible}
        handleNavMenuVisible={handleNavMenuVisible}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={<Main isCartFull={isCartFull} handleCardSubmit={handleCardSubmit} />}
        />
        <Route
          path='/cart'
          element={
            <Cart
              itemList={cartList}
              handleChangeCountItemCart={handleChangeCountItemCart}
              handleDeleteItemCart={handleDeleteItemCart}
              handleClearCart={handleClearCart}
              handlePopupLoader={handlePopupLoader}
              handlePopupIsError={handlePopupIsError}
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
      <CartButton isCartFull={isCartFull} />
      <TooltipMessage isAddInCart={isAddInCart} />
      <TooltipPopup isOpen={popupIsOpen} isError={popupTypeError} />
    </div>
  );
}

export default App;
