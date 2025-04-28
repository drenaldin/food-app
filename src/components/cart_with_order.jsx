import React from 'react';

function CartWithOrder({ items, updateQuantity }) {
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div style={styles.cart}>
      <h2>Cuenta</h2>
      {items.map((item, index) => (
        <div key={index} style={styles.item}>
          <span>{item.emoji} x {item.quantity}</span>
          <div style={styles.buttons}>
            <button onClick={() => updateQuantity(index, 1)}>+</button>
            <button onClick={() => updateQuantity(index, -1)}>-</button>
            <span style={styles.price}>${item.quantity * item.price}</span>
          </div>
        </div>
      ))}
      <div style={styles.total}>
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

const styles = {
  cart: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '18px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  price: {
    marginLeft: '10px',
    fontWeight: 'bold',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontWeight: 'bold',
    fontSize: '20px',
  }
};

export default CartWithOrder;