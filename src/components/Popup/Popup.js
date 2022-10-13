import './Popup.css';

import iconOk from '../../images/icon-success.svg';
import iconError from '../../images/icon-error.svg';

function Popup({ isOpen, isError }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div
        className={`popup__container ${
          isError ? 'popup__container_type_error' : 'popup__container_type_success'
        }`}
      >
        <img
          className='popup__img'
          src={isError ? iconError : iconOk}
          alt='Иконка типа ответа'
          title='Тип ответа'
        ></img>
        <p className='popup__text'>
          {isError ? 'Произошла ошибка, попробуйте позже.' : 'Заказ отправлен.'}
        </p>
      </div>
    </div>
  );
}

export default Popup;
