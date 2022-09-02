import './Product.css';
import { useEffect, useMemo } from 'react';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';
import SliderProducts from '../SliderProducts/SliderProducts';
import { Pricing } from '../Pricing/Pricing';
import { productsList } from '../../utils/productsList';

function Product({ id, article, name, price, description, img, onAddInCart, shortInfo, propertyList, packageInfo, feature }) {
  const pricing = Pricing({
    type: 'product',
    price: price,
  });

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: name,
      count: pricing.count,
      price: pricing.priceProduct,
    });

    pricing.resetCounter();
  }

  const getAnotherProducts = useMemo(() => {
    // проверить
    return productsList.filter((item) => item.id !== id).sort(() => Math.random() - 0.5);
  }, [id]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <>
      <section className='product'>
        <Navigation />
        <h2 className='product__title'>{name}</h2>
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
                  count={pricing.count}
                  type='product'
                />
              </div>
            ) : null}
          </div>
          <div className='product__property'>
            <h3 className='product__subtitle'>Описание</h3>
            <p className='product__text product__text_color_gray'>{`Тип: ${shortInfo.type}`}</p>
            <p className='product__text product__text_color_gray'>{`Артикул: ${article}`}</p>
            <p className='product__text product__text_color_gray'>{`Размер: ${shortInfo.size}`}</p>
          </div>
          {feature !== null && (
            <div className='product__property'>
              <h3 className='product__subtitle'>Особенность</h3>
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
            <h3 className='product__subtitle'>В упаковке:</h3>
            <p className='product__text product__text_type_package'>
              {packageInfo}
            </p>
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
