import React from 'react';
import ProductCard from './product_card';

function ProductCatalog({ products, addToCart }) {
  return (
    <div className="products">
      <h1>Food App</h1>
      <div className="productList">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
