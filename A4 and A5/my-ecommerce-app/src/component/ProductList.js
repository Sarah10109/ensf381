import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem'; // Adjust the import path as necessary

function ProductList({ addToCart }) {
    const [productsData, setProductsData] = useState([]);

    // useEffect(() => {
    //     fetch('/products')
    //         .then(response => response.json())
    //         .then(data => setProductsData(data));
    // }, []);
  

    useEffect(() => {
      fetch('http://127.0.0.1:5000/products')
          .then(response => {
              console.log(response);
              return response.json();
          })
          .then(data => {
              console.log(data);
              setProductsData(data);
          });
        }, []);

    return (
        <div>
            {productsData.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;

