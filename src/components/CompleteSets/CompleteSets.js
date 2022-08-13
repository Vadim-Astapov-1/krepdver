import './CompleteSets.css';

import CompleteSetCard from '../CompleteSetCard/CompleteSetCard';
import { productsList } from '../../utils/constants';

function CompleteSets({ handleCardSubmit }) {
  return (
    <section className='complete-sets'>
      <h2 className='complete-sets__title'>
        Монтажные комплекты для установки дверей
      </h2>
      <div className='container complete-sets__container'>
        <div className='complete-sets__card-list'>
          {productsList.map(
            (item) =>
              item.type === 'complete-set' && (
                <CompleteSetCard
                  key={item.id}
                  name={item.article}
                  price={item.price}
                  description={item.description}
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

export default CompleteSets;
