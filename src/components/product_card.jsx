import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="productCard">
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
  );
}

export default ProductCard;
