import './Cart.css';
import { useState } from 'react';

import CartCard from '../CartCard/CartCard';
import Navigation from '../Navigation/Navigation';

function Cart({ producs }) {
  const [isTypeContact, setIsTypeContact] = useState(false);

  function handleCardSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <Navigation />
      <section className='cart'>
        <h1 className='cart__title'>Корзина</h1>
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
        <form className='cart__form' onSubmit={handleCardSubmit}>
          <div className='cart__container-form'></div>
        </form>
      </section>
    </>
  );
}

export default Cart;
