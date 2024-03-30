import React from 'react';
import ProductItem from './ProductItem'; // Adjust the import path as necessary
import productsData from '../data/products'; // Adjust the import path as necessary

function ProductList({ addToCart }) {
    return (
      <div>
        {productsData.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  }
  
  export default ProductList;
