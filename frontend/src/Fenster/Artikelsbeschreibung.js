import './Artikelsbeschreibung.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/korbActions';

const Artikelsbeschreibung = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  return (
    <div className="artikelsbeschreibung">
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="Beschreibungstitel">BESCHREIBUNG</div>
          <div className="artikelsbeschreibung_links">
            <div className="links_image">
              <img src="./images/Hemd-001-Min.jpg" alt="Hemd_1" />
            </div>
            <div className="links_info">
              <p className="links_name">Hemd_001</p>
              <p>Preis: 89.99€</p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores
              </p>
            </div>
          </div>
          <div className="artikelsbeschreibung_rechts">
            <div className="rechts_info">
              <p>
                Farbe:
                <select>
                  <option value="Weiß">Weiß</option>
                  <option value="Schwarz">Schwarz</option>
                </select>
              </p>
              <p>
                Größe:
                <select>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </p>
              <p>
                Preis: <span>89.99€</span>
              </p>
              <p>
                Status: <span>In Stock</span>
              </p>
              <p>
                Anzahl
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
              <p>
                <button type="button">IN DEN WARENKORB</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Artikelsbeschreibung;
