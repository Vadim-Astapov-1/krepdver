import './SliderProducts.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import SliderProductsCard from '../SliderProductsCard/SliderProductsCard';

function SliderProducts({ productList }) {
  const [translateX, setTranslateX] = useState(0);
  const [step, setStep] = useState(null);
  const [position, setPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  const listCardRef = useRef();

  const location = useLocation();

  const handleLastPostion = useCallback(
    (widthCard) => {
      const takedPosition = Math.round(listCardRef.current.offsetWidth / widthCard);

      setLastPosition(productList.length - takedPosition);
    },
    [productList]
  );

  function handleLotSteps(widthCard, twoSteps) {
    if (twoSteps) {
      return setStep(widthCard * 2);
    }

    setStep(widthCard);
  }

  const calculateStep = useCallback(
    ({ pcCardWidht, laptopCardWidht, ipadCardWidht }) => {
      const twoSteps = productList % 2 === 0;

      if (window.innerWidth > 1024) {
        handleLastPostion(pcCardWidht);
        handleLotSteps(pcCardWidht, twoSteps);
        return;
      }

      if (window.innerWidth > 768) {
        handleLastPostion(laptopCardWidht);
        handleLotSteps(laptopCardWidht, twoSteps);
        return;
      }

      if (window.innerWidth > 425) {
        handleLastPostion(ipadCardWidht);
        handleLotSteps(ipadCardWidht, twoSteps);
        return;
      }

      if (window.innerWidth <= 425) {
        setLastPosition(productList.length - 1);
        setStep(listCardRef.current.offsetWidth);
        return;
      }
    },
    [productList, handleLastPostion]
  );

  function scrollLeft() {
    setPosition(position - 1);
    setTranslateX(translateX + step);
  }

  function scrollRight() {
    setPosition(position + 1);
    setTranslateX(translateX - step);
  }

  useEffect(() => {
    calculateStep({
      pcCardWidht: 246,
      laptopCardWidht: 236,
      ipadCardWidht: 232,
    });
  }, [calculateStep]);

  useEffect(() => {
    setPosition(0);
    setTranslateX(0);
  }, [location.pathname]);

  return (
    <div className='slider-products'>
      <h2 className='slider-products__title'>Рекомендуемые товары</h2>
      <div className='slider-products__container'>
        {position > 0 && (
          <button type='button' className='slider-products__btn' onClick={scrollLeft}></button>
        )}
        {position < lastPosition && (
          <button
            type='button'
            className='slider-products__btn slider-products__btn_type_right'
            onClick={scrollRight}
          ></button>
        )}
        <div className='slider-products__container-list' ref={listCardRef}>
          <div
            className='slider-products__list-card'
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {productList.map((item) => (
              <SliderProductsCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderProducts;
