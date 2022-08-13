import './CompleteSetCard.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardForm from '../CardForm/CardForm';

function CompleteSetCard({ id, name, price, description, img, onAddInCart}) {
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
      <p className='set-card__price'>{`Цена: ${priceProduct} руб`}</p>
      <Link to={`/products/${id}`} className='set-card__description'>{description}</Link>
      <CardForm onSubmit={handleCardSubmit} onBtnClick={handleCountClick} count={count} place='set-card' />
    </article>
  );
}

export default CompleteSetCard;
