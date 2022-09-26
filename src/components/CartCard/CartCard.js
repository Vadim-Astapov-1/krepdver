import './CartCard.css';

import { Pricing } from '../Pricing/Pricing';

function CartCard({ id, name, count, price, img }) {
  const pricing = Pricing({
    type: 'cart-card',
    price: price,
    count: count,
  });

  return (
    <div className='cart-card'>
      <div className='cart-card__container'>
        <h2 className='cart-card__title'>{name}</h2>
        <img className='cart-card__img' src={img} alt={name}></img>
        <p className='cart-card__price'>{`${price} руб`}</p>
        <div className='cart-card__container-price'>
          <button
            type='button'
            className='cart-card__btn cart-card__btn_type_under'
            name='cart-card-btn-under'
            onClick={pricing.handleCountClick}
          ></button>
          <p className='cart-card__count'>{pricing.countProduct}</p>
          <button
            type='button'
            className='cart-card__btn'
            name='cart-card-btn-up'
            onClick={pricing.handleCountClick}
          ></button>
        </div>
      </div>
      <p className='cart-card__sum'>{`${pricing.priceProduct} руб`}</p>
      <button type='button' className='cart-card__btn-delete'></button>
    </div>
  );
}

export default CartCard;
