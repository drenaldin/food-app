import React, { useState, useEffect } from 'react';
import CartWithOrder from './components/cart_with_order';
import { products } from './data/products';
import './App.css';

function App() {
  // Leer el carrito desde localStorage al inicio
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Cada vez que cartItems cambie, lo guardamos en localStorage
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
        // cuando agregamos guardamos el stock también
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          const maxStock = item.stock; // Usamos el stock que ya está en el item
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
      <div className="products">
        <h1>Food App</h1>
        <div className="productList">
          {products.map(product => (
            <div key={product.id} className="productCard">
              <span className="emoji">{product.emoji}</span>
              <div className="stockArea">
                {product.stock > 0 ? (
                  <span>{product.stock}</span>
                ) : (
                  <span className="noStock">No stock</span>
                )}
              </div>
              <div>${product.price}</div>
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="addButton"
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cartArea">
        <CartWithOrder items={cartItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
