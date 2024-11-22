import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  // Debugging: Check the structure of cartItems being passed in
  console.log(cartItems);  // This will log the entire cartItems array to the console

  // Calculate the total price, considering quantity for each item
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1), 0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">Price: ₹{item.price ? item.price : "Not Available"}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="item-total">
                    Total for this item: ₹{(item.price || 0) * (item.quantity || 1)}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total Price: ₹{totalPrice}</h3>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
