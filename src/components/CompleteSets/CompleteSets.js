import './CompleteSets.css';

import CompleteSetCard from '../CompleteSetCard/CompleteSetCard';
import { completeSetsList } from '../../utils/constants';

function CompleteSets({ handleCardSubmit }) {
  return(
    <section className='complete-sets'>
      <h2 className='complete-sets__title'>Монтажные комплекты для установки дверей</h2>
      <div className='complete-sets__container line-background-block'>
        <div className='complete-sets__card-list'>
          {completeSetsList.map((item) => <CompleteSetCard key={item.article} name={item.name} price={item.price} description={item.description} img={item.img} onAddInCart={handleCardSubmit}/>)}
        </div>
      </div>
    </section>
  );
}

export default CompleteSets;
