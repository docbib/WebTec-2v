import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
      <img src="./images/Hemd-001-Min.jpg" alt="product name" />

      <div className="product_info">
        <p className="info_name">Hemd_001</p>
        <p className="info_deskription">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores
        </p>
        <p className="info_preis">89.99€</p>

        <Link to={`/product/${1111}`} className="info_button">
          Ansehen
        </Link>
      </div>
    </div>
  );
};

export default Product;
