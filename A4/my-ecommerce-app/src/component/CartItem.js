import React from 'react';

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  const { image, name, price, quantity } = item;
  const totalPrice = (price * quantity).toFixed(2);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      onUpdateCart(item.id, quantity - 1); // Decrease quantity
    } else {
      onRemoveFromCart(item.id); // Remove item from cart if quantity is 1
    }
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} style={{ width: '50px', height: '50px' }} />
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p> 
      <p>Total: ${totalPrice}</p>
      <button onClick={handleDecreaseQuantity}>Remove</button>
    </div>
  );
};

export default CartItem;
