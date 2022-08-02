import { useState } from 'react';
import './CompleteSetCard.css';

function CompleteSetCard({name, price, description, img}) {
  const [count, setCount] = useState(1);

  function handleCountClick(evt) {
    if(evt.target.id === 'complete-set-btn-up') {
      if(count === 99) {
        return;
      }

      return setCount(count + 1);
    }

    if(count === 1) {
      return;
    }

    setCount(count - 1);
  }

  return(
    <article className='complete-set__card'>
      <img className='complete-set__img' src={img} alt={name}></img>
      <h3 className='complete-set__title'>{name}</h3>
      <div className='complete-set__info'>
        <p className='complete-set__price'>{`Цена: ${price} руб`}</p>
        <button className='complete-set__btn-info'>Подробнее</button>
      </div>
      <p className='complete-set__description'>{description}</p>
      <div className='complete-set__btn-container'>
        <div className='complete-set__calculator'>
          <button className='complete-set__btn-up' id='complete-set-btn-up' onClick={handleCountClick}></button>
          <p className='complete-set__count'>{count}</p>
          <p className='complete-set__count-text'>шт</p>
          <button className='complete-set__btn-under' id='complete-set-btn-under' onClick={handleCountClick}></button>
        </div>
        <button className='complete-set__btn'>Добавить в корзину</button>
      </div>
    </article>
  );
}

export default CompleteSetCard;
