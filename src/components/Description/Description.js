import './Description.css';

import banner from '../../images/banner-short.png';

function Description() {
  return(
    <section className='description'>
      <div className='description__container'>
        <h1 className='description__title'>Специальные монтажные комплекты для профессиональной установки межкомнатных дверей</h1>
        <p className='description__subtitle'>Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!</p>
        <button className='description__btn'>Заказать прямо сейчас!</button>
      </div>
      <img className='description__img' src={banner} alt='Баннер'></img>
    </section>
  );
}

export default Description;
