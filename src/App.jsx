import React, { useState } from 'react';
import CartWithOrder from './components/cart_with_order';
import ProductCatalog from './components/product_catalog'; // <-- nuevo import

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { emoji: "🍔", name: "Hamburguesa", price: 100 },
    { emoji: "🍟", name: "Papas Fritas", price: 50 },
    { emoji: "🌮", name: "Taco", price: 80 },
    { emoji: "🥤", name: "Refresco", price: 30 },
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(item => item.emoji === product.emoji);
      if (index !== -1) {
        updateQuantity(index,1)
      } else {
        // No está en el carrito, agregar nuevo
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (index, delta) => {
    setCartItems(prevItems => {
      return prevItems.map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.products}>
        <h1>Food App</h1>
        <ProductCatalog products={products} addToCart={addToCart} />
      </div>

      <div style={styles.cartArea}>
        <CartWithOrder items={cartItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  products: {
    width: '60%',
    paddingRight: '20px',
  },
  cartArea: {
    width: '40%',
    position: 'sticky',
    top: '40px',
  }
};

export default App;
