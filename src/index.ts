import TgBot from './bot'
import dbClient from "./db/dbClient"
import { authMiddleware } from './middlewares/auth'


const bot = TgBot.getInstance()
const prisma = dbClient.getInstance()

bot.use(authMiddleware)

bot.start((ctx) => {
  ctx.reply('Привет! Для продолжения требуется ввести пароль.')
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.hears('привет', (ctx) => {
  ctx.reply('Привет! Как у вас дела?')
})

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
