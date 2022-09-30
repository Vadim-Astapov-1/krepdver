import './Cart.css';
import { useEffect, useRef, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import CartCard from '../CartCard/CartCard';
import CartInputs from '../CartInputs/CartInputs';
import CartResult from '../CartResult/CartResult';

import { emailApi } from '../../utils/EmailjsApi';

function Cart({ itemList, handleChangeCountItemCart, handleDeleteItemCart }) {
  const [isSending, setIsSending] = useState(false);
  const [isDelivery, setIsDelivery] = useState(0);
  const [sum, setSum] = useState(0);
  const [isError, setIsError] = useState(false);
  const cartRef = useRef();

  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    location: '',
    comment: '',
  });

  function handleIsSending() {
    if (itemList.length === 0) {
      return handleError();
    }

    setIsSending(!isSending);
  }

  function handleChangeInputs(evt) {
    let input = evt.target;

    if (input.name === 'name') {
      return setFormValues({ ...formValues, name: input.value });
    }

    if (input.name === 'surname') {
      return setFormValues({ ...formValues, surname: input.value });
    }

    if (input.name === 'phone') {
      return setFormValues({ ...formValues, phone: input.value });
    }

    if (input.name === 'email') {
      return setFormValues({ ...formValues, email: input.value });
    }

    if (input.name === 'location') {
      return setFormValues({ ...formValues, location: input.value });
    }

    if (input.name === 'comment') {
      return setFormValues({ ...formValues, comment: input.value });
    }
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

    emailApi
      .sendEmail(formValues)
      .then(() => console.log('Заказ отправлен'))
      .catch((err) => console.log(err));
  }

  function handleError() {
    setIsError(true);

    setTimeout(() => setIsError(false), 500);
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
            itemList.length !== 0 ? (
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
              <p className={`cart__warning ${isError ? 'cart__warning_active' : ''}`}>
                В корзине пусто
              </p>
            )
          ) : (
            <CartInputs
              handleIsSending={handleIsSending}
              formValues={formValues}
              handleChangeInputs={handleChangeInputs}
            />
          )}
          <CartResult
            isTypeSending={!isSending}
            totalPrice={sum}
            isDelivery={isDelivery}
            resultPrice={sum + isDelivery}
            isError={isError}
            handleIsSending={handleIsSending}
            handleInputChangeDelivery={handleInputChangeDelivery}
          />
        </form>
      </div>
    </section>
  );
}

export default Cart;
