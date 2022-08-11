import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

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
        {productsList.map((item) => <Route path={`/krepdver/products/${item.id}`} />)}
        <Route path='*' element={<p>404</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

// !Во всех path прописан /krepdver для корректной работы сайта на github
// !Ошибка связана с добавление homepage в package.json
// !Убрать /krepdver и homepage при релизе!


export default App;
