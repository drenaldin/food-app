import React from 'react';
import ProductCard from './product_card';

function ProductCatalog({ products, addToCart }) {
  return (
    <div className="products">
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
