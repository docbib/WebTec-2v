import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({
  imageUrl,
  ArtikelName,
  ArtikelPreis,
  ArtikelDeskription,
  productId,
}) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={ArtikelName} />

      <div className="product_info">
        <p className="info_name">{ArtikelName}</p>
        <p className="info_deskription">
          {ArtikelDeskription.substring(0, 100)}...
        </p>
        <p className="info_preis">{ArtikelPreis}€</p>

        <Link to={`/product/${productId}`} className="info_button">
          Ansehen
        </Link>
      </div>
    </div>
  );
};

export default Product;
