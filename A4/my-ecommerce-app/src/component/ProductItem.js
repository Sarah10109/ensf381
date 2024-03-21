import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <h3 onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        {product.name}
      </h3>
      {showDescription && <p>{product.description}</p>}
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
