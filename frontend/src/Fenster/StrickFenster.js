import './StrickFenster.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const StrickFenster = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="strickfenster">
      <div className="strick_title">Strick & Sweat</div>

      <div className="strick_products">
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              ArtikelName={product.ArtikelName}
              ArtikelPreis={product.ArtikelPreis}
              ArtikelDeskription={product.ArtikelDeskription}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StrickFenster;
