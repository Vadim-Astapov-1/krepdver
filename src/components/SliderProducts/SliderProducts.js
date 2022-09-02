import './SliderProducts.css';
import { useEffect, useState } from 'react';

import SliderProductsCard from '../SliderProductsCard/SliderProductsCard';

function SliderProducts({ productList }) {
  const [translateCoordinates, setTranslateCoordinates] = useState(null);
  const [step, setStep] = useState(null);

  // назначить шаг!

  function scrollSliderLeft() {
    console.log(window.innerWidth)
  }

  function scrollSliderRight() {

  }

  useEffect(() => {
    if(window.innerWidth > 425) {
      setStep(200);
    }
  }, []);

  return(
    <div className='slider-products'>
      <h2 className='slider-products__title'>Рекомендуемые товары</h2>
      <div className='slider-products__container'>
        <button type='button' className='slider-products__btn' onClick={scrollSliderLeft}></button>
        <button type='button' className='slider-products__btn slider-products__btn_type_right' onClick={scrollSliderRight}></button>
        <div className='slider-products__container-list'>
          <div className='slider-products__list-card'>
            {productList.map((item) => <SliderProductsCard key={item.id} id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderProducts;
