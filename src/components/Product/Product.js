import { useLocation } from 'react-router-dom';
import './Product.css';

function Product() {
  const location = useLocation();
  console.log(location)

  return(
    <p>Страница продукта</p>
  );
}

export default Product;
