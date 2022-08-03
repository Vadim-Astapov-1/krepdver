import { useEffect, useState } from 'react';
import './CompleteSetCard.css';

import CardForm from '../CardForm/CardForm';

function CompleteSetCard({name, price, description, img, onAddInCart}) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.name === 'set-card-btn-up') {
      if(count === 99) {
        return;
      }

      setCount(count + 1);
      setPriceProduct(priceProduct + price);
      return;
    }

    if(count === 1) {
      return;
    }

    setCount(count - 1);
    setPriceProduct(priceProduct - price);
  }

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: name,
      count: count,
      price: priceProduct,
    });

    setPriceProduct(price);
    setCount(1);
  }

  useEffect(() => {
    setPriceProduct(price);
  }, [price]);

  return(
    <article className='set-card'>
      <img className='set-card__img' src={img} alt={name}></img>
      <h3 className='set-card__title'>{name}</h3>
      <div className='set-card__info'>
        <p className='set-card__price'>{`Цена: ${priceProduct} руб`}</p>
        <button className='set-card__btn-info'>Подробнее</button>
      </div>
      <p className='set-card__description'>{description}</p>
      <CardForm onSubmit={handleCardSubmit} onBtnClick={handleCountClick} count={count} place='set-card' />
    </article>
  );
}

export default CompleteSetCard;
