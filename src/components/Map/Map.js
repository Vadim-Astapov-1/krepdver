import { useState } from 'react';
import './Map.css';

function Map({ sectionRef }) {
  const [mapName, setMapName] = useState('Москва');

  function handleMapChange(evt) {
    setMapName(evt.target.textContent);
  }

  return (
    <section className='map' ref={sectionRef}>
      <h2 className='map__title'>
        Крепеж для установки дверей также можно купить у наших партнеров
      </h2>
      <ul className='map__btn-list'>
        <li className='map__list-element'>
          <button type='button' className='map__btn' onClick={handleMapChange}>
            Москва
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn' onClick={handleMapChange}>
            Тула
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn' onClick={handleMapChange}>
            Липецк
          </button>
        </li>
        <li className='map__list-element'>
          <button type='button' className='map__btn' onClick={handleMapChange}>
            Зерноград
          </button>
        </li>
      </ul>
      <div className='map__container'>
        {mapName === 'Москва' ? (
          <iframe
            className='map__iframe'
            loading='lazy'
            title='Москва'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A586343654b27e5426353bb7e3b97af626573f6f23a43c4ed9ccb7d15cb432680&amp;source=constructor'
            width='100%'
            // height 400
            frameBorder='0'
          ></iframe>
        ) : mapName === 'Тула' ? (
          <iframe
            className='map__iframe'
            loading='lazy'
            title='Тула'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3Acb389a44088a6d40aec6a6eec9193ccc2cb6f9c286571d970c7f6e0c924e2a3c&amp;source=constructor'
            width='100%'
            frameBorder='0'
          ></iframe>
        ) : mapName === 'Липецк' ? (
          <iframe
            className='map__iframe'
            loading='lazy'
            title='Липецк'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A4a02724734df75e314637ad075f781c76bb3983fd8c416264638fea76e2e9d82&amp;source=constructor'
            width='100%'
            frameBorder='0'
          ></iframe>
        ) : mapName === 'Зерноград' ? (
          <iframe
            className='map__iframe'
            loading='lazy'
            title='Зерноград'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A4c3d87459f69b9439739ebbb2f68ca21e6a784dddc75c1c54cd6dd0125d2a85e&amp;source=constructor'
            width='100%'
            frameBorder='0'
          ></iframe>
        ) : null}
      </div>
    </section>
  );
}

export default Map;
