import './ExtraCard.css';

import CardForm from '../CardForm/CardForm';
import { useEffect, useState } from 'react';

function ExtraCard({ article, name, descriptionList, price, img, onAddInCart }) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.name === 'extra-card-btn-up') {
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
    <article className='extra-card'>
      <img className='extra-card__img' src={img} alt={article}></img>
      <div className='extra-card__info'>
        <h3 className='extra-card__title'>{article}</h3>
        <p className='extra-card__subtitle'>{name}</p>
        {descriptionList.map((item, index) => <p key={index} className='extra-card__paragraph'>{`${index + 1}. ${item}`}</p>)}
        <div className='extra-card__info-price'>
          <p className='extra-card__price'>{`Цена: ${priceProduct} руб`}</p>
          <CardForm onSubmit={handleCardSubmit} onBtnClick={handleCountClick} count={count} place='extra-card' />
        </div>
      </div>
    </article>
  );
}

export default ExtraCard;
