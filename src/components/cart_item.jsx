import React from 'react';

function CardItem({ item, updateQuantity }) {
  return (
    <div className="cartItem">
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
  );
}

export default CardItem;
