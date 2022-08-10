import './Map.css';

function Map() {
  return (
    <section className='map'>
      <h1 className='map__title'>
        Крепежи для установки дверей также можно купить у наших партнеров
      </h1>
      <ul className='map__btn-list'>
        <li className='map__list-element'>
          <button type='button' className='map__btn'>
            Москва
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn'>
            Санкт-Петербург
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn'>
            Тула
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn'>
            Липецк
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn'>
            Зерноград
          </button>
        </li>
      </ul>
      <iframe
        className='map__iframe'
        loading='lazy'
        title='Москва'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Ab66098a6adc4d19b07bd15b2420002590ce542672060a2079fe3bc4e72fc9c47&amp;source=constructor'
        frameBorder='0'
      ></iframe>
    </section>
  );
}

export default Map;
