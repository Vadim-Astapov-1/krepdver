import './Product.css';
import { useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';
import { Pricing } from '../Pricing/Pricing';

function Product({ article, name, price, description, img, onAddInCart, shortInfo, propertyList, packageInfo, notice }) {
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

  useEffect(() => {
    document.title = name;
  }, [name]);


  return(
    <>
    <section className='product'>
      <Navigation />
      <div className='container product__container'>
        <h2 className='product__title'>{name}</h2>
        <img className='product__img' src={img} alt={name}></img>
        <div className='product__container-description'>
          <p className='product__description'>{description}</p>
          {notice !== null && <p className='product__notice'>{notice}</p>}
          <div className='product__price-container'>
            <p className='product__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
            <CardForm onSubmit={handleCardSubmit} onBtnClick={pricing.handleCountClick} count={pricing.count} type='product' />
          </div>
        </div>
        <div className='product__characteristic'>
          <h3 className='product__subtitle'>Описание</h3>
          <p className='product__type'>{`Тип: ${shortInfo.type}`}</p>
          <p className='product__type'>{`Артикул: ${article}`}</p>
          <p className='product__type'>{`Размер: ${shortInfo.size}`}</p>
        </div>
      </div>
      <div className='product__gray-container'>
        <ul className='product__property-list'>
          {propertyList.map((item, index) => <li key={index} className='product__property-item'>{`${index + 1}. ${item}`}</li>)}
        </ul>
        <p className='product__package-text'>{packageInfo}</p>
        <h3 className='product__subtitle'>В упаковке:</h3>
      </div>
    </section>
    </>
  );
}

export default Product;
