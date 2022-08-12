import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

import { productsList } from '../../utils/constants';

function App() {
  function handleCardSubmit({ name, count, price }) {
    console.log(`Добавлен товар в корзину ${name} ${count} шт, цена: ${price}`);
  }

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route exact path='/krepdver/' element={<Main handleCardSubmit={handleCardSubmit} />} />
        {productsList.map((item) => <Route path={`/krepdver/products/${item.id}`} key={item.id} element={<Product />}/>)}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

// !Во всех path прописан /krepdver для корректной работы сайта.
// !Ошибка связана с добавление homepage в package.json.
// !Убрать /krepdver и homepage при релизе! + изменить все Link.


export default App;
