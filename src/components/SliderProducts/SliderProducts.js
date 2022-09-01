import './SliderProducts.css';
import { useState } from 'react';

import SliderProductsCard from '../SliderProductsCard/SliderProductsCard';

function SliderProducts({ productList }) {
  const [translateCoordinates, setTranslateCoordinates] = useState(null);

  // назначить шаг!

  function scrollSliderLeft() {

  }

  function scrollSliderRight() {

  }

  return(
    <div className='slider-products'>
      <h2 className='slider-products__title'>Рекомендуемые товары</h2>
      <div className='slider-products__container'>
        <button type='button' className='slider-products__btn' onClick={scrollSliderLeft}></button>
        <button type='button' className='slider-products__btn slider-products__btn_type_right' onClick={scrollSliderRight}></button>
        <div className='slider-products__list-card'>
          {productList.map((item) => <SliderProductsCard id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />)}
        </div>
      </div>
    </div>
  );
}

export default SliderProducts;
