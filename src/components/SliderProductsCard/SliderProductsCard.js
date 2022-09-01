import { useNavigate } from 'react-router-dom';
import './SliderProductsCard.css';

function SliderProductsCard({ id, img, name, description, price }) {
  const navigate = useNavigate();

  function goToProductPage() {
    navigate(`/product/${id}`)
  }

  return(
    <article className='slider-card' onClick={goToProductPage}>
      <div className='slider-card__container'>
        <img className='slider-card__img' src={img} alt={name}></img>
        <h3 className='slider-card__title'>{description}</h3>
        <p className='slider-card__price'>{`Цена ${price} руб`}</p>
      </div>
    </article>
  );
}

export default SliderProductsCard;
