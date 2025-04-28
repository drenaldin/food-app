import React, { useState, useEffect } from 'react';
import ProductCatalog from './components/product_catalog';
import CartWithOrder from './components/cart_with_order';
import { products } from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        if (itemInCart.quantity < product.stock) {
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return prevItems;
        }
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const maxStock = item.stock;
          const newQuantity = item.quantity + delta;
          if (newQuantity > 0 && newQuantity <= maxStock) {
            return { ...item, quantity: newQuantity };
          }
          if (newQuantity <= 0) {
            return null;
          }
        }
        return item;
      }).filter(Boolean);
    });
  };

  return (
    <div className="container">
      <ProductCatalog products={products} addToCart={addToCart} />
      <CartWithOrder items={cartItems} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
