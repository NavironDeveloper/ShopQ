import os
from dotenv import dotenv_values

env_values = dotenv_values('.env')

# Данные бота @AldanLiverisBot (захардкожены по просьбе пользователя)
BOT_TOKEN = os.getenv("BOT_TOKEN") or env_values.get("BOT_TOKEN", "")

notification_channel_str = os.getenv("NOTIFICATION_CHANNEL_ID") or env_values.get("NOTIFICATION_CHANNEL_ID", "")
if notification_channel_str and notification_channel_str.lstrip('-').isdigit():
    NOTIFICATION_CHANNEL_ID = int(notification_channel_str)
else:
    NOTIFICATION_CHANNEL_ID = None

super_admin_str = os.getenv("SUPER_ADMIN_IDS") or env_values.get("SUPER_ADMIN_IDS", "")
if super_admin_str:
    SUPER_ADMIN_IDS = [
        int(id_str.strip())
        for id_str in super_admin_str.split(",") if id_str.strip().lstrip('-').isdigit()
    ]
else:
    SUPER_ADMIN_IDS = []

DATABASE_NAME = "shop_q.db"

PAYMENT_METHODS = {
    'bitcoin': {
        'enabled': True,
        'wallet': '',
        'name': 'Bitcoin (BTC)'
    },
    'ethereum': {
        'enabled': True,
        'wallet': '',
        'name': 'Ethereum (ETH)'
    },
    'card': {
        'enabled': True,
        'name': 'Карта курьеру'
    },
    'cash': {
        'enabled': True,
        'name': 'Наличные'
    }
}

REFERRAL_BONUS_INVITER = 100
REFERRAL_BONUS_INVITED = 50

ANTI_FLOOD_LIMIT = 5
ANTI_FLOOD_TIMEOUT = 60

DELIVERY_TIME_MINUTES = 60

WELCOME_MESSAGE = """Торжественное открытие! 🎉

Теперь в одном сервисе:
🥗 Продукты питания • 🍔 Фастфуд • 💄 Косметика • 🛠 Инструменты • 💊 Аптечные товары • 👗 Одежда

Доставляем всё — от хлеба до гардероба! Не нашли нужный товар? Позвоните нам, и мы найдём всё, что вам необходимо.

Ваш город становится ближе!
📞 8-914-101-71-89

🛍️ Выберите свою роль для начала работы:"""

WELCOME_IMAGE = "attached_assets/9c720c54-09f6-419e-84a9-c30a281b9e8d_1763431398593.jpg"

MIN_RATING = 1.1
MAX_RATING = 5.5

DEFAULT_LANGUAGE = 'ru'
