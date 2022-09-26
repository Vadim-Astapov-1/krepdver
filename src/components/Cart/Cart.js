import './Cart.css';
import { useState } from 'react';

import Navigation from '../Navigation/Navigation';
import CartCard from '../CartCard/CartCard';
import CartInputs from '../CartInputs/CartInputs';
import CartResult from '../CartResult/CartResult';

function Cart({ producs }) {
  const [isSending, setIsSending] = useState(false);

  function handleIsSending() {
    setIsSending(!isSending)
  }

  function handleCardSubmit(evt) {
    evt.preventDefault();
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className='cart'>
      <Navigation />
      <div className='cart__container'>
        <h1 className='cart__title'>{!isSending ? 'Корзина' : 'Оформление заказа'}</h1>
        <form className='cart__form' onSubmit={handleFormSubmit}>
          {!isSending ? (
            <div className='cart__card-list'>
              {producs.map((item) => (
                <CartCard
                  id={item.id}
                  name={item.name}
                  count={item.count}
                  price={item.price}
                  img={item.img}
                />
              ))}
            </div>
          ) : (
            <CartInputs />
          )}
          <CartResult />
        </form>
      </div>
    </section>
  );
}

export default Cart;
