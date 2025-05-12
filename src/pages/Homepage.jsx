import React, { useState, useEffect } from 'react';
import ProductCatalog from '../components/product_catalog';
import CartWithOrder from '../components/cart_with_order';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { products as productsData } from '../data/products';
import '../App.css';

function HomePage() {
  const [products, setProducts] = useState(productsData);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (product.stock <= 0) {
        return prevItems;
      }
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        if (itemInCart.quantity < product.stock) {
          return prevItems.map((item) =>
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
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const maxStock = item.stock;
            const newQuantity = item.quantity + delta;
            if (newQuantity > 0 && newQuantity <= maxStock) {
              return { ...item, quantity: newQuantity };
            }
          }
          return item;
        })
        .filter(({ quantity }) => quantity > 0)
    );
  };

  const makeOrder = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);
        if (cartItem) {
          return {
            ...product,
            stock: product.stock - cartItem.quantity,
          };
        }
        return product;
      })
    );
    setCartItems([]);
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container">
      <ProductCatalog products={products} addToCart={addToCart} darkMode={darkMode} />
      <CartWithOrder
        items={cartItems}
        updateQuantity={updateQuantity}
        makeOrder={makeOrder}
        removeItem={removeItem}
        clearCart={clearCart}
        darkMode={darkMode}
      />
      <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default HomePage;