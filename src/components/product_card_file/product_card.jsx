import React from 'react';
import './stile_product_card.css';

function ProductCard({ product, addToCart }) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="productCard" onClick={() => addToCart(product)}>
      <span className={`emoji ${isOutOfStock ? 'outOfStockElement' : ''}`}>
        {product.emoji}
      </span>

      <div className="productInfo">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>

      <div className="stockArea">
        {isOutOfStock ? (
          <span className="noStock outOfStockElement">No stock</span>
        ) : (
          <span>{product.stock}</span>
        )}
      </div>

      <div className={`price ${isOutOfStock ? 'outOfStockElement' : ''}`}>
        ${product.price}
      </div>
    </div>

  );
}

export default ProductCard;
