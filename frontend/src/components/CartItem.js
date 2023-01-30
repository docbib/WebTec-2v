import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src="./images/Hemd-001-Min.jpg" alt="product name" />
      </div>

      <Link to={`/product/${1111}`} className="cartitem_name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem_preis">89.99€</p>

      <select className="cartitem_select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem_deletebtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
