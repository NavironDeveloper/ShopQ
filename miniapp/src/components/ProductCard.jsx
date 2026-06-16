import './ProductCard.css'

function ProductCard({ product, onClick, onAddToCart }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        <span className="product-category-badge">{product.category}</span>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-description">{product.description}</p>
        <div className="product-card-footer">
          <div className="product-card-rating">
            ⭐ {product.rating}
          </div>
          <div className="product-card-price">
            {product.price === 0 ? 'Бесплатно' : `${product.price} ₽`}
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation()
            onAddToCart(product)
          }} 
          className="add-to-cart-btn"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default ProductCard
