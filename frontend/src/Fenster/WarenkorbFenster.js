import './WarenkorbFenster.css';

import CartItem from '../components/CartItem';

const WarenkorbFenster = () => {
  return (
    <div className="warenkorbfenster">
      <div className="warenkorbfenster_links">
        <h2>Warenkorb</h2>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="warenkorbfenster_rechts">
        <div className="warenkorbfenster_info">
          <p>Subtotal (0) items</p>
          <p>89.99€</p>
        </div>
        <div>
          <button>ZUR KASSE</button>
        </div>
      </div>
    </div>
  );
};

export default WarenkorbFenster;
