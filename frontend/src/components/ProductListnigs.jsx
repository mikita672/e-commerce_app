import ProductCard from "./ProductCard";

function ProductListnigs({ products }) {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listing-empty">No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductListnigs;
