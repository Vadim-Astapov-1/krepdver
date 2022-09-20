import { useState } from 'react';
import './Map.css';

function Map({ sectionRef }) {
  const [pointerEvents, setPointerEvents] = useState(false);

  function handlePointerEvents() {
    setPointerEvents(true);
  }

  return (
    <section className='map' ref={sectionRef}>
      <h2 className='map__title'>
        Крепежи для установки дверей также можно купить у наших партнеров
      </h2>
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
      <div className='map__container' onClick={handlePointerEvents}>
        <iframe
          className='map__iframe'
          style={{ pointerEvents: `${pointerEvents ? 'all' : 'none'}` }}
          loading='lazy'
          title='Москва'
          src='https://yandex.ru/map-widget/v1/?um=constructor%3Ab66098a6adc4d19b07bd15b2420002590ce542672060a2079fe3bc4e72fc9c47&amp;source=constructor'
          frameBorder='0'
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
