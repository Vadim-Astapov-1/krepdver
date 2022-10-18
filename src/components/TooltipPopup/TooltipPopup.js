import './TooltipPopup.css';

import Popup from '../Popup/Popup';

import iconOk from '../../images/icon-success.svg';
import iconError from '../../images/icon-error.svg';

function TooltipPopup({ isOpen, isError }) {
  return (
    <Popup isOpen={isOpen} name='tooltip'>
      <div
        className={`popup-tooltip__container ${
          isError ? 'popup-tooltip__container_type_error' : 'popup-tooltip__container_type_success'
        }`}
      >
        <img
          className='popup-tooltip__img'
          src={isError ? iconError : iconOk}
          alt='Иконка типа ответа'
          title='Тип ответа'
        ></img>
        <p className='popup-tooltip__text'>
          {isError ? 'Произошла ошибка, попробуйте позже.' : 'Заказ отправлен.'}
        </p>
      </div>
    </Popup>
  );
}

export default TooltipPopup;
