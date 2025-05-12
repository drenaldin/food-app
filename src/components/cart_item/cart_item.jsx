import React from 'react';

function CardItem({ item, updateQuantity,removeItem }) {
  return (
    <div className="cartItem">
      <span className="itemInfo">{item.emoji} × {item.quantity}</span>
      <div className="cartButtons">
        <button
          className="quantityButton minus"
          onClick={() => updateQuantity(item.id, -1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <button
          className="quantityButton plus"
          onClick={() => updateQuantity(item.id, 1)}
          disabled={item.quantity >= item.stock}
        >
          +
        </button>
        <span className="itemPrice">${(item.quantity * item.price).toFixed(2)}</span>
        <button
          className="removeButton"
          onClick={() => removeItem(item.id)}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default CardItem;