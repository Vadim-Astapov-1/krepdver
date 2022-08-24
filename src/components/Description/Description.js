import './Description.css';
import Link from 'react-scroll/modules/components/Link';

import banner from '../../images/banner-short.png';

function Description() {
  return (
    <section className='description'>
      <div className='description__container'>
        <h1 className='description__title'>Специальные монтажные комплекты для профессиональной установки межкомнатных дверей</h1>
        <img className='description__img-mobile' src={banner} alt='Баннер'></img>
        <p className='description__subtitle'>Дверная коробка монтируется в проем любой готовности. Справиться даже новичок, подходит для самостоятельного монтажа!</p>
        <Link className='description__link' to='complete-sets' smooth='true' duration={800}>Заказать прямо сейчас!</Link>
      </div>
      <img className='description__img' src={banner} alt='Баннер'></img>
    </section>
  );
}

export default Description;
