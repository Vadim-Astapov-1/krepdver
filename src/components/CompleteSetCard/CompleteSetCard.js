import { useEffect, useState } from 'react';
import './CompleteSetCard.css';

function CompleteSetCard({name, price, description, img, onAddInCart}) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.id === 'set-card-btn-up') {
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
      <form className='set-card__btn-container' onSubmit={handleCardSubmit}>
        <div className='set-card__calculator'>
          <button type='button' className='set-card__btn-up' id='set-card-btn-up' onClick={handleCountClick}></button>
          <p className='set-card__count'>{count}</p>
          <p className='set-card__count-text'>шт</p>
          <button type='button' className='set-card__btn-under' id='set-card-btn-under' onClick={handleCountClick}></button>
        </div>
        <button type='submit' className='set-card__btn' onSubmit={handleCardSubmit}>Добавить в корзину</button>
      </form>
    </article>
  );
}

export default CompleteSetCard;
