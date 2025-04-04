import "./index.css";

//const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
//const THRESHOLD = 1000;

const Products = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      <h3 className="products-heading">Products</h3>
      <ul className="products-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{`₹${product.price}`}</p>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
