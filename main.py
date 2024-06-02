from aiogram import Bot, Dispatcher, types
from sqlalchemy.orm import Session

TOKEN = "5972947391:AAHqWpTzyHuBpplJVZ5PTBsgvkM37vpgk0k"
bot = Bot(token=TOKEN)
dp = Dispatcher(bot, storage=MemoryStorage())
db: Session = SessionLocal()
