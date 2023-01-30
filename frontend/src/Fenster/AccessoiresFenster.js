import './AccessoiresFenster.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const AccessoiresFenster = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="accessoiresfenster">
      <div className="accessoires_title">Accessoires</div>

      <div className="accessoires_products">
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

export default AccessoiresFenster;
