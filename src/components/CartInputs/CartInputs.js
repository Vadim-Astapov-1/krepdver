import './CartInputs.css';

function CartInputs({ handleIsSending }) {
  return (
    <fieldset className='cart-form__container'>
      <div className='cart-form__container-shorts'>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-name'>
            Имя:
          </label>
          <input type='text' className='cart-form__input' id='cart-form-input-name' minLength={2} maxLength={20} required></input>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-surname'>
            Фамилия:
          </label>
          <input type='text' className='cart-form__input' id='cart-form-input-surname' minLength={2} maxLength={20} required></input>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-phone'>
            Телефон:
          </label>
          <input type='text' className='cart-form__input' id='cart-form-input-phone' minLength={6} maxLength={20} required></input>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-email'>
            Email:
          </label>
          <input type='email' className='cart-form__input' id='cart-form-input-email' required></input>
        </div>
      </div>
      <div className='cart-form__container-longs'>
        <div className='cart-form__item-input cart-form__item-input_long_full'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-location'>
            Город, улица, дом, корпус:
          </label>
          <input type='text' className='cart-form__input' id='cart-form-input-location' minLength={6} maxLength={100} required></input>
        </div>
        <div className='cart-form__item-input cart-form__item-input_long_full'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-comment'>
            Комментарий:
          </label>
          <textarea
            type='textaria'
            className='cart-form__input cart-form__input_type_field'
            id='cart-form-input-comment'
          ></textarea>
        </div>
      </div>
      <button type='button' className='cart-form__btn' onClick={handleIsSending}>
        Вернуться
      </button>
    </fieldset>
  );
}

export default CartInputs;
