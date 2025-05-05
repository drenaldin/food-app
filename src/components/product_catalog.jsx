import React from 'react';

function ProductCatalog({ products, addToCart }) {
  return (
    <div style={styles.container}>
      <h2>Productos</h2>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div key={index} style={styles.card} onClick={() => addToCart(product)}>
            <div style={styles.emoji}>{product.emoji}</div>
            <div style={styles.name}>{product.name}</div>
            <div style={styles.price}>${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '10px',
  },
  card: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
  },
  emoji: {
    fontSize: '30px',
  },
  name: {
    marginTop: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  price: {
    marginTop: '5px',
    color: '#555',
  }
};

export default ProductCatalog;
