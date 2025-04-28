import React from 'react';

function CartWithOrder({ items, updateQuantity }) {
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Cuenta</h2>
      {items.map((item) => (
        <div key={item.id} className="cartItem">
          <span>{item.emoji} x {item.quantity}</span>
          <div className="cartButtons">
            <button
              onClick={() => updateQuantity(item.id, 1)}
              disabled={item.quantity >= item.stock}
            >
              +
            </button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span className="itemPrice">${item.quantity * item.price}</span>
          </div>
        </div>
      ))}
      <div className="cartTotal">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

export default CartWithOrder;
