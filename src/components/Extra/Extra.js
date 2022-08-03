import './Extra.css';

import ExtraCard from '../ExtraCard/ExtraCard';
import { extraList } from '../../utils/constants';

function Extra({ handleCardSubmit }) {
  return (
    <section className='extra'>
      <h2 className='extra__title'>ВАМ МОЖЕТ ПОНАДОБИТЬСЯ</h2>
      <div className='extra__card-list'>
        {extraList.map((item) => <ExtraCard key={item.article} article={item.article} name={item.name} price={item.price} descriptionList={item.descriptionList} img={item.img} />)}
      </div>
    </section>
  );
}

export default Extra;
