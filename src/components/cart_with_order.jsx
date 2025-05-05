import React from 'react';
import CardItem from './cart_item';

function CartWithOrder({ items, updateQuantity, makeOrder }) { // Agrega makeOrder aquí
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cartArea">
      <h2>Cuenta</h2>
      {items.map(item => (
        <CardItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
        />
      ))}
      <div className="cartTotal">
        <span>Total:</span>
        <span>${total}</span>
        </div>
        <div className="cartButtons">
        <button onClick={makeOrder}>Pedir</button> {/* Llama directamente a makeOrder */}
      </div>
    </div>
  );
}

export default CartWithOrder;
