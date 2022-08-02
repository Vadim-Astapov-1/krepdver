import { useEffect, useState } from 'react';
import './CompleteSetCard.css';

function CompleteSetCard({name, price, description, img, onAddInCart}) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.id === 'complete-set-btn-up') {
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
    <article className='complete-set__card'>
      <img className='complete-set__img' src={img} alt={name}></img>
      <h3 className='complete-set__title'>{name}</h3>
      <div className='complete-set__info'>
        <p className='complete-set__price'>{`Цена: ${priceProduct} руб`}</p>
        <button className='complete-set__btn-info'>Подробнее</button>
      </div>
      <p className='complete-set__description'>{description}</p>
      <form className='complete-set__btn-container' onSubmit={handleCardSubmit}>
        <div className='complete-set__calculator'>
          <button type='button' className='complete-set__btn-up' id='complete-set-btn-up' onClick={handleCountClick}></button>
          <p className='complete-set__count'>{count}</p>
          <p className='complete-set__count-text'>шт</p>
          <button type='button' className='complete-set__btn-under' id='complete-set-btn-under' onClick={handleCountClick}></button>
        </div>
        <button type='submit' className='complete-set__btn' onSubmit={handleCardSubmit}>Добавить в корзину</button>
      </form>
    </article>
  );
}

export default CompleteSetCard;
