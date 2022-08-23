import './CompleteSetCard.css';
import { Link } from 'react-router-dom';

import CardForm from '../CardForm/CardForm';
import { Pricing } from '../Pricing/Pricing';

function CompleteSetCard({ id, article, price, description, img, onAddInCart }) {
  const pricing = Pricing({
    type: 'set-card',
    price: price,
  });

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: article,
      count: pricing.count,
      price: pricing.priceProduct,
    });

    pricing.resetCounter();
  }

  return(
    <article className='set-card'>
      <img className='set-card__img' src={img} alt={article}></img>
      <h3 className='set-card__title'>{article}</h3>
      <p className='set-card__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
      <Link to={`/product/${id}`} className='set-card__description'>{description}</Link>
      <CardForm onSubmit={handleCardSubmit} onBtnClick={pricing.handleCountClick} count={pricing.count} type='set-card' />
    </article>
  );
}

export default CompleteSetCard;
