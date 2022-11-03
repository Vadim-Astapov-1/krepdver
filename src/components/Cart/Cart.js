import './Cart.css';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Navigation from '../Navigation/Navigation';
import CartCard from '../CartCard/CartCard';
import CartInputs from '../CartInputs/CartInputs';
import CartResult from '../CartResult/CartResult';
import ConsentToGivingDataPopup from '../ConsentToGivingDataPopup/ConsentToGivingDataPopup';

import { emailApi } from '../../utils/EmailjsApi';
import { Validation } from '../Validation/Validation';

function Cart({
  itemList,
  handleChangeCountItemCart,
  handleDeleteItemCart,
  handleClearCart,
  handlePopupLoader,
  handlePopupIsError,
}) {
  const [isSending, setIsSending] = useState(false);
  const [isConsentPopupOpen, setIsConsentPopupOpen] = useState(false);
  const [isDelivery, setIsDelivery] = useState(300);
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

  let validation = Validation();

  function handleIsSending() {
    if (itemList.length === 0) {
      return handleError();
    }

    setIsSending(!isSending);
  }

  function handleConsentPopupOpen() {
    setIsConsentPopupOpen(!isConsentPopupOpen);
  }

  function handleChangeInputs(evt) {
    let input = evt.target;

    validation.handleChangeInput(evt);

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
      setIsDelivery(500);
    } else {
      setIsDelivery(300);
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

    let list = itemList.map(
      (item) =>
        `Арт. ${item.article} ${item.name.split(item.article)[0]} ${item.count} шт, цена ${
          item.price
        }.00, сумма ${item.count * item.price}.00`
    );

    let date = new Date();

    let params = {
      name: formValues.name ? formValues.name : '-',
      surname: formValues.surname ? formValues.surname : '-',
      phone: formValues.phone ? formValues.phone : '-',
      email: formValues.email ? formValues.email : '-',
      location: formValues.location ? formValues.location : '-',
      comment: formValues.comment ? formValues.comment : '-',
      deliveryType: isDelivery ? 'до двери' : 'cдэк',
      sum: sum + ' руб',
      delivery: isDelivery ? isDelivery + ' руб' : isDelivery,
      fullPrice: sum + isDelivery + ' руб',
      time: `${date.getHours()}:${
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      }`,
      date: `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${
        date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      }.${date.getFullYear()}`,
    };

    validation.handleIsValid(false);

    // Заполняем товарами
    list.forEach((item, index) => {
      params[`item${index}`] = item;
    });

    handlePopupLoader();

    emailApi
      .sendEmail(params)
      .then(() => {
        handlePopupIsError(false);
      })
      .then(() => {
        handleClearCart();
        validation.resetForm();
      })
      .catch((err) => {
        handlePopupIsError(true);
        validation.handleIsValid(true);
        console.log(err);
      });
  }

  function handleError() {
    setIsError(true);

    setTimeout(() => setIsError(false), 500);
  }

  useEffect(() => {
    if (window.innerWidth <= 425) {
      return window.scroll(0, 0);
    }

    cartRef.current.scrollIntoView();
  }, [isSending]);

  useEffect(() => {
    handleSum(itemList);
  }, [itemList]);

  return (
    <section className='cart' ref={cartRef}>
      <Helmet prioritizeSeoTags>
        <link rel='canonical' href='/cart'></link>
        <meta name='description' content></meta>
        <title>Корзина</title>
      </Helmet>
      <Navigation />
      <div className='cart__container'>
        <h1 className='cart__title'>{!isSending ? 'Корзина' : 'Оформление заказа'}</h1>
        <form className='cart__form' onSubmit={handleFormSubmit} noValidate>
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
              validation={validation}
              handleChangeInputs={handleChangeInputs}
            />
          )}
          <CartResult
            isTypeSending={!isSending}
            totalPrice={sum}
            isDelivery={isDelivery}
            resultPrice={sum + isDelivery}
            isError={isError}
            isValid={validation.isValid}
            handleIsSending={handleIsSending}
            handleInputChangeDelivery={handleInputChangeDelivery}
            handleConsentPopupOpen={handleConsentPopupOpen}
          />
        </form>
      </div>
      <ConsentToGivingDataPopup
        isOpen={isConsentPopupOpen}
        handleConsentPopupOpen={handleConsentPopupOpen}
      />
    </section>
  );
}

export default Cart;
