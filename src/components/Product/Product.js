import './Product.css';
import { useEffect, useState } from 'react';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';

function Product({ article, name, price, description, img, onAddInCart, shortInfo, propertyList, packageInfo, notice }) {
  const [count, setCount] = useState(1);
  const [priceProduct, setPriceProduct] = useState(0);

  function handleCountClick(evt) {
    if(evt.target.name === 'product-btn-up') {
      if(count === 99) {
        return;
      }

      setCount(count + 1);
      setPriceProduct(priceProduct + price);
      return;
    }

    if(count === 1) {
      return;
    }

    setCount(count - 1);
    setPriceProduct(priceProduct - price);
  }

  function handleCardSubmit(evt) {
    evt.preventDefault();

    onAddInCart({
      name: name,
      count: count,
      price: priceProduct,
    });

    setPriceProduct(price);
    setCount(1);
  }

  useEffect(() => {
    setPriceProduct(price);
  }, [price]);

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
            <p className='product__price'>{`Цена: ${priceProduct} руб`}</p>
            <CardForm onSubmit={handleCardSubmit} onBtnClick={handleCountClick} count={count} place='product' />
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
