import React from 'react';
import CardItem from './cart_item';

function CartWithOrder({ items, updateQuantity, makeOrder,removeItem,clearCart }) { // Agrega makeOrder aquí
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cartArea">
      <div className='cartTitle' style={{display:'flex'}}>
      <h2 style={{ justifySelf: 'center' }}>Cuenta</h2>
      <div className="cartButtons">
        <div onClick={clearCart} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
          🗑️
        </div>
      </div>
      </div>
      {items.map(item => (
        <CardItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
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
