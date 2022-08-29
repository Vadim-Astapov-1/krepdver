import './Product.css';
import { useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import CardForm from '../CardForm/CardForm';
import SliderProducts from '../SliderProducts/SliderProducts';
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
        <div className='product__heading'>
          <img className='product__img' src={img} alt={name}></img>
          <p className='product__description'>{description}</p>
          <div className='product__container-price'>
            <p className='product__price'>{`Цена: ${pricing.priceProduct} руб`}</p>
            <CardForm onSubmit={handleCardSubmit} onBtnClick={pricing.handleCountClick} count={pricing.count} type='product' />
          </div>
        </div>
        <div className='product__property'>
          <h3 className='product__subtitle'>Описание</h3>
          <p className='product__text product__text_descr_type'>{`Тип: ${shortInfo.type}`}</p>
          <p className='product__text product__text_descr_type'>{`Артикул: ${article}`}</p>
          <p className='product__text product__text_descr_type'>{`Размер: ${shortInfo.size}`}</p>
        </div>
        {notice !== null &&
        <div className='product__property'>
          <h3 className='product__subtitle'>Особенность</h3>
          <p className='product__text'>{notice}</p>
        </div>}
      </div>
      <div className='product__concept'>
        <div className='product__container-concept'>
          <ul className='product__capability-list'>
            {propertyList.map((item, index) => <li key={index} className='product__capability-item'>{item}</li>)}
          </ul>
          <h3 className='product__subtitle'>В упаковке:</h3>
          <p className='product__text'>{packageInfo}</p>
        </div>
      </div>
      <SliderProducts />
    </section>
    </>
  );
}

export default Product;
