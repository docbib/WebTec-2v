import './HemdenFenster.css';
import React from 'react';
import Product from '../components/Product';

const HemdenFenster = () => {
  return (
    <div className="hemdenfenster">
      <div className="hemden_title">Hemden</div>

      <div className="hemden_products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HemdenFenster;
