import { Scenes, Telegraf, Context, session } from 'telegraf'
import getEnv from './helpers/getEnv'
import TgScenes from './scenes/scenes'
import tgCommands from './enums/menuButtons'


interface TGContext extends Context, Scenes.SceneContext {}
class TgBot {
  private static instance: Telegraf<TGContext>
  private constructor() {}
  
  public static getInstance(): Telegraf<TGContext> {
    if (!TgBot.instance) {
      const TG_TOKEN = getEnv('TG_TOKEN')
      const bot = new Telegraf<TGContext>(TG_TOKEN)
      const stage = new Scenes.Stage(TgScenes)

      bot.use(session())
      bot.use(stage.middleware())
      bot.telegram.setMyCommands(tgCommands)

      bot.command('help', (ctx) => ctx.scene.enter('helpScene'));
      bot.command('files_storage', (ctx) => ctx.scene.enter('filesStorageScene'));
      bot.command('cash_tracking', (ctx) => ctx.scene.enter('cashTrackingScene'));
      bot.command('change_lang', (ctx) => ctx.scene.enter('changeLangScene'));
      bot.command('owner_info', (ctx) => ctx.scene.enter('ownerInfoScene'));
      bot.command('politic_confidence', (ctx) => ctx.scene.enter('politicConfidenceScene'));

      TgBot.instance = bot
    }
    
    return TgBot.instance
  }
}

export default TgBot