import './TooltipMessage.css';

function TooltipMessage({ isAddInCart }) {
  return (
    <div className={`tooltip-message ${isAddInCart ? 'tooltip-message_active' : ''}`}>
      <p className={`tooltip-message__text ${isAddInCart ? 'tooltip-message__text_active' : ''}`}>
        Товар добавлен в корзину
      </p>
    </div>
  );
}

export default TooltipMessage;
