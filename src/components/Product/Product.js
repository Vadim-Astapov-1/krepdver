import './Product.css';
import { useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import { websiteLink } from '../../utils/constants';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';
import SliderProducts from '../SliderProducts/SliderProducts';
import { Pricing } from '../Pricing/Pricing';
import { productsList } from '../../utils/productsList';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
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
      article: article,
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
    if (window.innerWidth <= 425) {
      return window.scroll(0, 0);
    }

    productRef.current.scrollIntoView();
  }, [id]);

  return (
    <>
      <section className='product' ref={productRef}>
        <Helmet prioritizeSeoTags>
          <link rel='canonical' href={window.location.href}></link>
          <meta name='description' content={description}></meta>
          <meta property='og:title' content={name}></meta>
          <meta property='og:description' content={description}></meta>
          <meta property='og:type' content='article'></meta>
          <meta property='og:url' content={`${websiteLink}${location.pathname}`}></meta>
          <meta property='og:image' content={websiteLink + img}></meta>
          <meta property='og:image:width' content='400'></meta>
          <meta property='og:image:height' content='300'></meta>
          <title>{name}</title>
        </Helmet>
        <Navigation />
        <h1 className='product__title'>{name}</h1>
        <div className='container product__container'>
          <div className='product__heading'>
            <img className='product__img' src={img} alt={name} title={name}></img>
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
              count={pricing.countProduct}
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
