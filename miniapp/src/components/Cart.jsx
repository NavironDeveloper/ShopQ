import './Cart.css'

function Cart({ cart, onRemove, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    // Здесь будет интеграция с ботом для оформления заказа
    alert('Заказ оформлен! Интеграция с ботом будет добавлена позже.')
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Корзина пуста</h2>
        <p>Добавьте программы из каталога</p>
        <button onClick={onBack} className="back-to-catalog">
          Вернуться в каталог
        </button>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <button onClick={onBack} className="back-button">←</button>
        <h2>Корзина ({cart.length})</h2>
      </div>
      
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-category">{item.category}</p>
              <div className="cart-item-price">
                {item.price === 0 ? 'Бесплатно' : `${item.price} ₽`}
              </div>
            </div>
            <button 
              onClick={() => onRemove(index)}
              className="remove-item-button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Итого:</span>
          <span className="total-price">{total === 0 ? 'Бесплатно' : `${total} ₽`}</span>
        </div>
        <button onClick={handleCheckout} className="checkout-button">
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default Cart
