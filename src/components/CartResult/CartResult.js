import './CartResult.css';

function CartResult({
  isTypeSending,
  isDelivery,
  totalPrice,
  resultPrice,
  isError,
  isValid,
  handleIsSending,
  handleInputChangeDelivery,
}) {
  return (
    <div className='cart-result'>
      <div className='cart-result__container'>
        <fieldset className='cart-result__container-input'>
          <p className='cart-result__inputs-title'>Тип доставки</p>
          <input
            className='cart-result__input-range'
            type='radio'
            name='cart-result-input'
            id='cart-result-input-door'
            onChange={handleInputChangeDelivery}
          ></input>
          <label className='cart-result__input-name' htmlFor='cart-result-input-door'>
            До двери
          </label>
          <input
            className='cart-result__input-range'
            type='radio'
            name='cart-result-input'
            id='cart-result-input-sdek'
            onChange={handleInputChangeDelivery}
            defaultChecked
          ></input>
          <label className='cart-result__input-name' htmlFor='cart-result-input-sdek'>
            До пункта выдачи заказов СДЭК
          </label>
        </fieldset>
        <div className='cart-result__container-price'>
          <p className='cart-result__text-price cart-result__text-price_type_name'>Сумма</p>
          <p className='cart-result__text-price'>{totalPrice ? `${totalPrice} руб` : 0}</p>
          <p className='cart-result__text-price cart-result__text-price_type_name'>Доставка</p>
          <p className='cart-result__text-price'>{`от ${isDelivery ? `${isDelivery} руб` : 0}`}</p>
          <p className='cart-result__text-price cart-result__text-price_type_name cart-result__text-price_style_result'>
            Итог
          </p>
          <p className='cart-result__text-price cart-result__text-price_style_result'>{`${resultPrice} руб`}</p>
        </div>
        <button
          type='submit'
          className={`cart-result__btn ${!isTypeSending ? 'cart-result__btn_visible' : ''} ${
            isError ? 'cart-result__btn_type_error' : ''
          }`}
          style={{ display: `${isTypeSending ? 'none' : 'block'}` }}
          disabled={!isValid && true}
        >
          Отправить заказ
        </button>
        <button
          type='button'
          className={`cart-result__btn ${isTypeSending ? 'cart-result__btn_visible' : ''} ${
            isError ? 'cart-result__btn_type_error' : ''
          }`}
          onClick={handleIsSending}
        >
          Оформить заказ
        </button>
        {/*!isTypeSending && (
          <p className='cart-result__text'>
            Нажимая на кнопку, вы даёте согласие на{' '}
            <span className='cart-result__text-allot'>обработку персональных данных</span>.
          </p>
        )*/}
      </div>
    </div>
  );
}

export default CartResult;
