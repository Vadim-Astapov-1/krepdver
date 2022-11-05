import './CartCard.css';
import { useDispatch } from 'react-redux';

import { Pricing } from '../Pricing/Pricing';

import { deleteItemCart, changeCountItemCart } from '../../store/slices/cartListSlice';

function CartCard({ id, name, count, price, img }) {
  const dispatch = useDispatch();
  // Добавление функции extraChangeCounter для отслеживания без асинхронности.
  // Решило проблему беспонечного рендеринка - при обновлении основного хранилища корзины,
  // за ним обновлялось pricing.countProduct.
  const pricing = Pricing({
    type: 'cart-card',
    price: price,
    count: count,
    extraChangeCounter: onChangeCount,
  });

  function onDeleteCard() {
    dispatch(deleteItemCart(id));
  }

  function onChangeCount(count) {
    dispatch(changeCountItemCart({ id, count }));
  }

  return (
    <div className='cart-card'>
      <div className='cart-card__container'>
        <h2 className='cart-card__title'>{name}</h2>
        <img className='cart-card__img' src={img} alt={name} title={name}></img>
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
        <p className='cart-card__sum'>{`${pricing.priceProduct} руб`}</p>
      </div>
      <button type='button' className='cart-card__btn-delete' onClick={onDeleteCard}></button>
    </div>
  );
}

export default CartCard;
