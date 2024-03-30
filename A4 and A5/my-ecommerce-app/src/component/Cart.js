import React from 'react';
import CartItem from './CartItem'; // Make sure the path to CartItem is correct

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart }) => {
  // Function to calculate the total price of all items in the cart
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  
 

  return (
    <div className="cart" style={{ position: 'absolute', right: '20%' }}>
      <h3>Shopping Cart</h3>
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onUpdateCart={onUpdateCart} 
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
      <div className="cart-total">
        <p>Total (in cart): ${calculateTotal(cartItems)}</p>
      </div>
    </div>
  );
};

export default Cart;
