import './Product.css';
import { useEffect, useMemo, useRef } from 'react';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';
import SliderProducts from '../SliderProducts/SliderProducts';
import { Pricing } from '../Pricing/Pricing';
import { productsList } from '../../utils/productsList';

function Product({
  id,
  article,
  name,
  price,
  description,
  img,
  onAddInCart,
  shortInfo,
  propertyList,
  packageInfo,
  feature,
}) {
  const productRef = useRef();

  const pricing = Pricing({
    type: 'product',
    price: price,
    count: null,
  });

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      id: id,
      name: name,
      count: pricing.countProduct,
      price: price,
      img: img,
    });

    pricing.resetCounter();
  }

  const getAnotherProducts = useMemo(() => {
    return productsList.filter((item) => item.id !== id).sort(() => Math.random() - 0.5);
  }, [id]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    productRef.current.scrollIntoView();
  }, []);

  return (
    <>
      <section className='product' ref={productRef}>
        <Navigation />
        <h1 className='product__title'>{name}</h1>
        <div className='container product__container'>
          <div className='product__heading'>
            <img className='product__img' src={img} alt={name}></img>
            <p className='product__description'>{description}</p>
            {window.innerWidth > 670 ? (
              <div className='product__container-price'>
                <p className='product__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
                <CardForm
                  onSubmit={handleCardSubmit}
                  onBtnClick={pricing.handleCountClick}
                  count={pricing.countProduct}
                  type='product'
                />
              </div>
            ) : null}
          </div>
          <div className='product__property'>
            <h2 className='product__subtitle'>Описание</h2>
            <p className='product__text product__text_color_gray'>{`Тип: ${shortInfo.type}`}</p>
            <p className='product__text product__text_color_gray'>{`Артикул: ${article}`}</p>
            <p className='product__text product__text_color_gray'>{`Размер: ${shortInfo.size}`}</p>
          </div>
          {feature !== null && (
            <div className='product__property'>
              <h2 className='product__subtitle'>Особенность</h2>
              <p className='product__text'>{feature}</p>
            </div>
          )}
        </div>
        <div className='product__concept'>
          <div className='product__container-concept'>
            <ul className='product__capability-list'>
              {propertyList.map((item, index) => (
                <li key={index} className='product__capability-item'>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className='product__subtitle'>В упаковке:</h2>
            <p className='product__text product__text_type_package'>{packageInfo}</p>
          </div>
        </div>
        {window.innerWidth <= 670 ? (
          <div className='product__container-price'>
            <p className='product__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
            <CardForm
              onSubmit={handleCardSubmit}
              onBtnClick={pricing.handleCountClick}
              count={pricing.count}
              type='product'
            />
          </div>
        ) : null}
        <SliderProducts productList={getAnotherProducts} />
      </section>
    </>
  );
}

export default Product;
