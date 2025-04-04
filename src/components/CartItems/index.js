import React from "react";
import "./index.css";

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

const CartItems = ({ cart, updateQuantity, subtotal, removeFromCart }) => {
  const hasFreeGift = subtotal >= THRESHOLD;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p className="empty-cart-description">Your cart is empty</p>
        <p className="empty-cart-note">Add some products to see them here!</p>
      </div>
    );
  }

  return (
    <div className="cart-items">
      <h3 className="cart-items-heading">Cart Items</h3>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-subtotal">
              ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
            </p>
          </div>
          <div className="quantity-controls">
            <button
              className="decrease-quantity"
              onClick={() => updateQuantity(item.id, -1)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="increase-quantity"
              onClick={() => updateQuantity(item.id, 1)}
            >
              +
            </button>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {hasFreeGift && (
        <div className="cart-item">
          <div>
            <p className="cart-item-name">{FREE_GIFT.name}</p>
            <p className="cart-item-subtotal">₹0 x 1 = ₹0</p>
          </div>
          <p className="free-gift">FREE GIFT</p>
        </div>
      )}
    </div>
  );
};

export default CartItems;
