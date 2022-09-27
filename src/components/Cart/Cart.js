import './Cart.css';
import { useEffect, useRef, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import CartCard from '../CartCard/CartCard';
import CartInputs from '../CartInputs/CartInputs';
import CartResult from '../CartResult/CartResult';

function Cart({ itemList, handleChangeCountItemCart, handleDeleteItemCart }) {
  const [isSending, setIsSending] = useState(false);
  const [isDelivery, setIsDelivery] = useState(300);
  const [sum, setSum] = useState(0);
  const cartRef = useRef();

  function handleIsSending() {
    setIsSending(!isSending);
  }

  function handleInputChangeDelivery(evt) {
    if (evt.target.id === 'cart-result-input-door') {
      setIsDelivery(300);
    } else {
      setIsDelivery(0);
    }
  }

  function handleSum(list) {
    let total = 0;

    list.forEach((item) => {
      total = total + item.price * item.count;
    });

    setSum(total);
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();

    console.log('submit');
  }

  useEffect(() => {
    cartRef.current.scrollIntoView();
  }, []);

  useEffect(() => {
    handleSum(itemList);
  }, [itemList]);

  return (
    <section className='cart' ref={cartRef}>
      <Navigation />
      <div className='cart__container'>
        <h1 className='cart__title'>{!isSending ? 'Корзина' : 'Оформление заказа'}</h1>
        <form className='cart__form' onSubmit={handleFormSubmit}>
          {!isSending ? (
            <div className='cart__card-list'>
              {itemList.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  count={item.count}
                  price={item.price}
                  img={item.img}
                  handleChangeCountItemCart={handleChangeCountItemCart}
                  handleDeleteItemCart={handleDeleteItemCart}
                />
              ))}
            </div>
          ) : (
            <CartInputs />
          )}
          <CartResult
            isTypeSending={!isSending}
            totalPrice={sum}
            isDelivery={isDelivery}
            resultPrice={sum + isDelivery}
            handleIsSending={handleIsSending}
            handleInputChangeDelivery={handleInputChangeDelivery}
          />
        </form>
      </div>
    </section>
  );
}

export default Cart;
