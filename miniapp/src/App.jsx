import { useEffect, useState } from 'react'
import { useTelegram } from './hooks/useTelegram'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import './App.css'

function App() {
  const { user, onClose } = useTelegram()
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [currentView, setCurrentView] = useState('catalog')
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Mock data для программ
  const mockProducts = [
    {
      id: 1,
      name: 'Adobe Photoshop 2024',
      description: 'Профессиональный редактор изображений с AI-функциями',
      price: 2990,
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400',
      category: 'Графика',
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      name: 'Visual Studio Code',
      description: 'Бесплатный редактор кода от Microsoft',
      price: 0,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
      category: 'Разработка',
      rating: 4.9,
      reviews: 1205
    },
    {
      id: 3,
      name: 'Figma Professional',
      description: 'Инструмент для дизайна интерфейсов и прототипирования',
      price: 1490,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
      category: 'Дизайн',
      rating: 4.7,
      reviews: 890
    },
    {
      id: 4,
      name: 'PyCharm Professional',
      description: 'IDE для Python-разработки с продвинутыми инструментами',
      price: 3990,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      category: 'Разработка',
      rating: 4.8,
      reviews: 567
    },
    {
      id: 5,
      name: 'Notion Premium',
      description: 'Универсальное рабочее пространство для команд',
      price: 990,
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400',
      category: 'Продуктивность',
      rating: 4.6,
      reviews: 432
    },
    {
      id: 6,
      name: 'DaVinci Resolve Studio',
      description: 'Профессиональное программное обеспечение для монтажа',
      price: 4990,
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400',
      category: 'Видео',
      rating: 4.9,
      reviews: 321
    }
  ]

  useEffect(() => {
    setProducts(mockProducts)
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setCurrentView('product')
  }

  const renderContent = () => {
    switch (currentView) {
      case 'catalog':
        return (
          <div className="catalog">
            <h1 className="page-title">Каталог программ</h1>
            <div className="products-grid">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
            </div>
          </div>
        )
      case 'product':
        return (
          <div className="product-detail">
            <button onClick={() => setCurrentView('catalog')} className="back-button">
              ← Назад
            </button>
            {selectedProduct && (
              <div className="product-detail-content">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="product-detail-image" />
                <div className="product-detail-info">
                  <h2 className="product-detail-name">{selectedProduct.name}</h2>
                  <span className="product-category">{selectedProduct.category}</span>
                  <p className="product-detail-description">{selectedProduct.description}</p>
                  <div className="product-rating">
                    ⭐ {selectedProduct.rating} ({selectedProduct.reviews} отзывов)
                  </div>
                  <div className="product-detail-price">
                    {selectedProduct.price === 0 ? 'Бесплатно' : `${selectedProduct.price} ₽`}
                  </div>
                  <button onClick={() => addToCart(selectedProduct)} className="add-to-cart-button">
                    Добавить в корзину
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      case 'cart':
        return <Cart cart={cart} onRemove={removeFromCart} onBack={() => setCurrentView('catalog')} />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">ShopQ</h1>
          <button 
            onClick={() => setCurrentView('cart')} 
            className="cart-button"
          >
            🛒 {cart.length}
          </button>
        </div>
      </header>
      <main className="app-main">
        {renderContent()}
      </main>
      <footer className="app-footer">
        <button onClick={onClose} className="close-button">
          Закрыть приложение
        </button>
      </footer>
    </div>
  )
}

export default App
