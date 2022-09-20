import './Advantages.css';

import iconQuality from '../../images/icon-quality.svg';
import iconSmile from '../../images/icon-smile.svg';
import iconList from '../../images/icon-list.svg';
import iconForbidden from '../../images/icon-forbidden.svg';
import iconCross from '../../images/icon-cross.svg';

function Advantages() {
  return (
    <section className='advantages'>
      <div className='advantages__container'>
        <h2 className='advantages__title'>Преимущества нашей технологии</h2>
        <div className='advantages__description'>
          <img className='advantages__img' src={iconQuality} alt='Иконка качестка'></img>
          <p className='advantages__paragraph'>
            Наш крепеж позволяет ставить двери быстро и качественно в проёмы любой готовности!
          </p>
          <img className='advantages__img' src={iconSmile} alt='Иконка смайл'></img>
          <p className='advantages__paragraph'>
            Пошаговая инструкция по применению в каждом комплекте. Проста в самостоятельной
            установке!
          </p>
          <img className='advantages__img' src={iconList} alt='Иконка лист'></img>
          <p className='advantages__paragraph'>
            Технология на монтажных кронштейнах позволяет выровнять все зазоры идеально даже после
            навешивания дверного полотна!
          </p>
          <img className='advantages__img' src={iconForbidden} alt='Иконка Запрещено'></img>
          <p className='advantages__paragraph'>
            Монтажная система крепежа для дверей - полностью скрытая, снаружи коробка нигде не
            сверлится!
          </p>
          <img className='advantages__img' src={iconCross} alt='Иконка крест'></img>
          <p className='advantages__paragraph'>
            Шесть комплектов крепежа в одном наборе достаточно чтобы установить межкомнатную дверь
            жёстко в шести точках дверного проёма. Этим Вы предотвратите бесконтрольное расширение
            пены и изменение монтажных зазоров.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
