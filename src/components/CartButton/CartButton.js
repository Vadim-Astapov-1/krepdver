import { Link, useLocation } from 'react-router-dom';
import './CartButton.css';

function CartButton({ isCartFull }) {
  const location = useLocation();

  return (
    location.pathname === '/' && (
      <Link to='/cart' className={`cart-btn ${isCartFull ? 'cart-btn_type_full' : ''}`}></Link>
    )
  );
}

export default CartButton;
