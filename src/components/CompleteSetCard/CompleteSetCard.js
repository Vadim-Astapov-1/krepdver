import './CompleteSetCard.css';
import { Link, useNavigate } from 'react-router-dom';

import CardForm from '../CardForm/CardForm';
import { Pricing } from '../Pricing/Pricing';

function CompleteSetCard({ id, article, price, description, img, onAddInCart }) {
  const navigate = useNavigate();

  const pricing = Pricing({
    type: 'set-card',
    price: price,
  });

  function handleToProductPage() {
    navigate(`/product/${id}`);
  }

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: article,
      count: pricing.count,
      price: pricing.priceProduct,
    });

    pricing.resetCounter();
  }

  return (
    <article className='set-card'>
      <img className='set-card__img' src={img} alt={article} onClick={handleToProductPage}></img>
      <h3 className='set-card__title'>{article}</h3>
      <p className='set-card__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
      <Link to={`/product/${id}`} className='set-card__description'>
        {description}
      </Link>
      <CardForm
        onSubmit={handleCardSubmit}
        onBtnClick={pricing.handleCountClick}
        count={pricing.count}
        type='set-card'
      />
    </article>
  );
}

export default CompleteSetCard;
