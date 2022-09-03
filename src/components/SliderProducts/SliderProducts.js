import './SliderProducts.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SliderProductsCard from '../SliderProductsCard/SliderProductsCard';

function SliderProducts({ productList }) {
  const [translateX, setTranslateX] = useState(0);
  const [step, setStep] = useState(null);
  const listCardRef = useRef();

  const location = useLocation();

  function handleLotSteps( widthCard, twoSteps) {
    if(twoSteps) {
      return setStep(widthCard * 2);
    }

    setStep(widthCard);
  }

  function  calculateStep({ pcCardWidht, laptopCardWidht, ipadCardWidht }) {
    // Если не делится без остатка, то будет прокручиваться одна карточка, иначе две.
    const twoSteps = productList % 2 === 0;
    const widthShortCard = listCardRef.current.offsetWidth;

    if(window.innerWidth > 1024) {
      return handleLotSteps(pcCardWidht, twoSteps);
    }

    if(window.innerWidth > 768) {
      return handleLotSteps(laptopCardWidht, twoSteps);
    }

    if(window.innerWidth > 425) {
      return handleLotSteps(ipadCardWidht, twoSteps);
    }

    if(window.innerWidth <= 425) {
      console.log(widthShortCard)
      return setStep(widthShortCard);
    }
  }

  function scrollLeft() {
    setTranslateX(translateX + step);
  }

  function scrollRight() {
    setTranslateX(translateX - step);
  }

  useEffect(() => {
    calculateStep({
      pcCardWidht: 246,
      laptopCardWidht: 236,
      ipadCardWidht: 232,
    });
  }, []);

  useEffect(() => {
    setTranslateX(0);
  }, [location.pathname]);

  return(
    <div className='slider-products'>
      <h2 className='slider-products__title'>Рекомендуемые товары</h2>
      <div className='slider-products__container'>
        <button type='button' className='slider-products__btn' onClick={scrollLeft}></button>
        <button type='button' className='slider-products__btn slider-products__btn_type_right' onClick={scrollRight}></button>
        <div className='slider-products__container-list' ref={listCardRef}>
          <div className='slider-products__list-card' style={{transform: `translateX(${translateX}px)`}}>
            {productList.map((item) => <SliderProductsCard key={item.id} id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderProducts;
