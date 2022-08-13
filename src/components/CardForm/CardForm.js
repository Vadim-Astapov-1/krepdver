import './CardForm.css';

function CardForm({ onSubmit, onBtnClick, count, place }) {
  return (
    <form className='card-form' onSubmit={onSubmit}>
      <div className='card-form__calculator'>
        <button
          type='button'
          className='card-form__btn-triangle'
          name={`${place}-btn-up`}
          onClick={onBtnClick}
        ></button>
        <p className='card-form__count'>{count}</p>
        <p className='card-form__count-text'>шт</p>
        <button
          type='button'
          className='card-form__btn-triangle card-form__btn-triangle_type_under'
          name={`${place}-btn-under`}
          onClick={onBtnClick}
        ></button>
      </div>
      <button type='submit' className='card-form__btn'>
        Добавить в корзину
      </button>
    </form>
  );
}

export default CardForm;
