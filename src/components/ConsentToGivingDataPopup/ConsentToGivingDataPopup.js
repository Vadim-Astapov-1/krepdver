import './ConsentToGivingDataPopup.css';

import Popup from '../Popup/Popup';

function ConsentToGivingDataPopup({ isOpen, handleConsentPopupOpen }) {
  return (
    <Popup isOpen={isOpen} name='consent'>
      <div className='consent__container'>
        <div className='consent__wrapper'>
          <p className='consent-text consent__paragraph'>
            Предоставляя свои персональные данные Покупатель даёт согласие на обработку, хранение и
            использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных»
            от 27.07.2006 г. в следующих целях:
          </p>
          <ul className='consent__list'>
            <li className='consent-text consent__list-item'>
              Получения Пользователем информации о заказе
            </li>
            <li className='consent-text consent__list-item'>
              Получения Продавцом контактной информации
            </li>
            <li className='consent-text consent__list-item'>
              Получения Продавцом информации о местонахождение для осуществления доставки
            </li>
          </ul>
          <p className='consent-text consent__paragraph'>
            Под персональными данными подразумевается любая информация личного характера,
            позволяющая установить личность Покупателя такая как:
          </p>
          <ul className='consent__list'>
            <li className='consent-text consent__list-item'>Фамилия, Имя</li>
            <li className='consent-text consent__list-item'>Контактный телефон</li>
            <li className='consent-text consent__list-item'>Адрес электронной почты</li>
            <li className='consent-text consent__list-item'>Адрес доставки</li>
          </ul>
          <p className='consent-text consent__paragraph'>
            Персональные данные Покупателей не хранятся и обрабатываются с использованием
            автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка
            персональных данных необходима в связи с исполнением требований законодательства.
          </p>
          <p className='consent-text consent__paragraph'>
            Продавец обязуется не передавать полученные персональные данные третьим лицам, за
            исключением следующих случаев:
          </p>
          <ul className='consent-text consent__list'>
            <li className='consent-text consent__list-item'>
              По запросам уполномоченных органов государственной власти РФ только по основаниям и в
              порядке, установленным законодательством РФ
            </li>
            <li className='consent-text consent__list-item'>
              Стратегическим партнерам, которые работают с Продавцом для предоставления продуктов и
              услуг, или тем из них, которые помогают Продавцу реализовывать продукты и услуги
              потребителям. Мы предоставляем третьим лицам минимальный объем персональных данных,
              необходимый только для оказания требуемой услуги или проведения необходимой
              транзакции.
            </li>
          </ul>
          <p className='consent-text consent__paragraph'>
            Продавец оставляет за собой право вносить изменения в одностороннем порядке в настоящие
            правила, при условии, что изменения не противоречат действующему законодательству РФ.
            Изменения условий настоящих правил вступают в силу после их публикации на Сайте.
          </p>
        </div>
        <button type='button' className='consent__btn' onClick={handleConsentPopupOpen}></button>
      </div>
    </Popup>
  );
}

export default ConsentToGivingDataPopup;
