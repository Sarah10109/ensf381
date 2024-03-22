import React, { useEffect, useState } from 'react';
import Header from './Header'; // Adjust path as necessary
import ProductList from './ProductList'; // Adjust path as necessary
import Cart from './Cart'; // Adjust path as necessary
import Footer from './Footer'; // Adjust path as necessary

const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const onUpdateCart = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };


  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems state changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Increase quantity if item already exists in cart
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    // Remove or decrease the quantity of the item from cart
    setCartItems(cartItems.reduce((acc, item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };
  
  
  return (
    <div className="product-page">
      <Header />
      <table>
          <tr>
            <td>
              <ProductList addToCart={addToCart} />
            </td>
            <td style={{ verticalAlign: 'top' }}>
            <Cart cartItems={cartItems} onUpdateCart={onUpdateCart} onRemoveFromCart={handleRemoveFromCart} />
            </td>
          </tr>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
