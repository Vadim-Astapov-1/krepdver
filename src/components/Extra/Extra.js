import './Extra.css';

import ExtraCard from '../ExtraCard/ExtraCard';
import { productsList } from '../../utils/productList';

function Extra({ handleCardSubmit }) {
  return (
    <section className='extra'>
      <div className='container extra__container'>
        <h2 className='extra__title'>ВАМ МОЖЕТ ПОНАДОБИТЬСЯ</h2>
        <div className='extra__card-list'>
          {productsList.map(
            (item) =>
              item.type === 'extra' && (
                <ExtraCard
                  key={item.id}
                  id={item.id}
                  article={item.article}
                  name={item.name}
                  price={item.price}
                  descriptionList={item.descriptionList}
                  img={item.img}
                  onAddInCart={handleCardSubmit}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default Extra;
