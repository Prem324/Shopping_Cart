import { useState } from "react";
import Products from "./components/Products";
import "./App.css";
import CartSummary from "./components/CartSummary";
import CartItems from "./components/CartItems";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "iPad", price: 150 },
  { id: 5, name: "GoogleTV", price: 400 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = getSubtotal();

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="shopping-cart-container">
      <h1 className="heading">Shopping Cart</h1>
      <Products products={PRODUCTS} addToCart={addToCart} />
      <div className="cart-summary-container">
        <h3 className="cart-summary-heading">Cart Summary</h3>
        <CartSummary subtotal={subtotal} />
        <CartItems
          cart={cart}
          updateQuantity={updateQuantity}
          subtotal={subtotal}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
};

export default App;
