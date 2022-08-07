import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  function handleCardSubmit({ name, count, price }) {
    console.log(`Добавлен товар в корзину ${name} ${count} шт, цена: ${price}`);
  }

  return (
    <div className="app">
      <Header />
      <Main handleCardSubmit={handleCardSubmit} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
