import './CartInputs.css';

function CartInputs({ handleIsSending, formValues, handleChangeInputs }) {
  return (
    <fieldset className='cart-form__container'>
      <div className='cart-form__container-shorts'>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-name'>
            Имя:
          </label>
          <input
            type='text'
            className='cart-form__input'
            id='cart-form-input-name'
            name='name'
            value={formValues.name}
            onChange={handleChangeInputs}
          ></input>
          <span className='cart-form__error-message'></span>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-surname'>
            Фамилия:
          </label>
          <input
            type='text'
            className='cart-form__input'
            id='cart-form-input-surname'
            name='surname'
            value={formValues.surname}
            onChange={handleChangeInputs}
          ></input>
          <span className='cart-form__error-message'></span>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-phone'>
            Телефон:
          </label>
          <input
            type='text'
            className='cart-form__input'
            id='cart-form-input-phone'
            name='phone'
            value={formValues.phone}
            onChange={handleChangeInputs}
            minLength={6}
            maxLength={20}
            required
          ></input>
          <span className='cart-form__error-message'></span>
        </div>
        <div className='cart-form__item-input'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-email'>
            Email:
          </label>
          <input
            type='email'
            className='cart-form__input'
            id='cart-form-input-email'
            name='email'
            value={formValues.email}
            onChange={handleChangeInputs}
            minLength={5}
            maxLength={50}
            required
          ></input>
          <span className='cart-form__error-message'></span>
        </div>
      </div>
      <div className='cart-form__container-longs'>
        <div className='cart-form__item-input cart-form__item-input_long_full'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-location'>
            Город, улица, дом, корпус:
          </label>
          <input
            type='text'
            className='cart-form__input'
            id='cart-form-input-location'
            name='location'
            value={formValues.location}
            onChange={handleChangeInputs}
            minLength={6}
            maxLength={100}
            autocomplate='off'
            required
          ></input>
          <span className='cart-form__error-message'></span>
        </div>
        <div className='cart-form__item-input cart-form__item-input_long_full'>
          <label className='cart-form__input-name' htmlFor='cart-form-input-comment'>
            Комментарий:
          </label>
          <textarea
            type='textaria'
            className='cart-form__input cart-form__input_type_field'
            id='cart-form-input-comment'
            name='comment'
            value={formValues.comment}
            onChange={handleChangeInputs}
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
