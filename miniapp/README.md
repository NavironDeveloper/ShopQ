# ShopQ MiniApp

Современный Telegram MiniApp для магазина программ с красивым интерфейсом.

## 🚀 Возможности

- 📱 Современный адаптивный дизайн
- 🎨 Темная тема в стиле Telegram
- 🛒 Корзина товаров
- 📦 Каталог программ с категориями
- ⭐ Рейтинги и отзывы
- 🔗 Интеграция с Telegram WebApp API

## 📋 Требования

- Node.js 18+ 
- npm или yarn

## 🛠️ Установка

1. Установите зависимости:
```bash
cd miniapp
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте http://localhost:3000

## 📦 Сборка для продакшена

```bash
npm run build
```

Файлы будут в папке `dist`

## 🔗 Интеграция с Telegram ботом

1. Задеплойте MiniApp на хостинг (Vercel, Netlify, GitHub Pages)
2. Получите URL вашего MiniApp
3. В боте добавьте кнопку для открытия MiniApp:
```python
keyboard = [[InlineKeyboardButton("🛍️ Открыть магазин", web_app=WebAppInfo(url="https://your-miniapp-url.com"))]]
```

## 🎨 Технологии

- React 18
- Vite
- TailwindCSS
- Telegram WebApp API

## 📁 Структура проекта

```
miniapp/
├── src/
│   ├── components/      # React компоненты
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   ├── Cart.jsx
│   │   └── Cart.css
│   ├── hooks/          # Custom hooks
│   │   └── useTelegram.js
│   ├── App.jsx         # Главный компонент
│   ├── App.css         # Стили приложения
│   ├── main.jsx        # Точка входа
│   └── index.css       # Глобальные стили
├── index.html          # HTML шаблон
├── package.json        # Зависимости
├── vite.config.js      # Конфигурация Vite
├── tailwind.config.js  # Конфигурация Tailwind
└── postcss.config.js   # Конфигурация PostCSS
```

## 🔧 Настройка

Для интеграции с вашим Python ботом нужно:

1. Создать API endpoints в боте для:
   - Получения списка товаров
   - Добавления в корзину
   - Оформления заказа
   - Получения информации о пользователе

2. В MiniApp заменить mock данные на реальные API вызовы

3. Добавить аутентификацию через Telegram initData

## 📝 TODO

- [ ] Интеграция с реальным API бота
- [ ] Добавить фильтры и поиск
- [ ] Добавить страницу профиля пользователя
- [ ] Добавить страницу заказов
- [ ] Добавить систему уведомлений
- [ ] Оптимизация для мобильных устройств
- [ ] Добавить анимации
- [ ] Настроить деплой

## 📄 Лицензия

MIT
