import './ExtraCard.css';
import { Link, useNavigate } from 'react-router-dom';

import CardForm from '../CardForm/CardForm';
import { Pricing } from '../Pricing/Pricing';

function ExtraCard({ id, article, name, price, descriptionList, img, onAddInCart }) {
  const navigate = useNavigate();

  const pricing = Pricing({
    type: 'extra-card',
    price: price,
  });

  function handleToProductPage() {
    navigate(`/product/${id}`)
  }

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: name,
      count: pricing.count,
      price: pricing.priceProduct,
    });

    pricing.resetCounter();
  }

  return(
    <article className='extra-card'>
      <img className='extra-card__img' src={img} alt={article} onClick={handleToProductPage}></img>
      <div className='extra-card__info'>
        <h3 className='extra-card__title'>{article}</h3>
        <Link to={`/product/${id}`} className='extra-card__container-link'>
          <p className='extra-card__subtitle'>{name}</p>
          {descriptionList.map((item, index) => <p key={index} className='extra-card__paragraph'>{`${index + 1}. ${item}`}</p>)}
        </Link>
        <div className='extra-card__container-price'>
          <p className='extra-card__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
          <CardForm onSubmit={handleCardSubmit} onBtnClick={pricing.handleCountClick} count={pricing.count} type='extra-card' />
        </div>
      </div>
    </article>
  );
}

export default ExtraCard;
