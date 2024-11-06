import TgBot from './bot'
import dbClient from './db/dbClient'
import { authMiddleware } from './middlewares/auth'


const prisma = dbClient.getInstance()
const bot = TgBot.getInstance()
bot.use(authMiddleware)

bot.launch(() => console.log('Bot started.')).catch((e) => {
  console.error(e)
})

process.once('SIGINT', () => {
  bot.stop('SIGINT')
  prisma.$disconnect()
})

process.once('SIGTERM', () => {
  bot.stop('SIGTERM')
  prisma.$disconnect()
})
