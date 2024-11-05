import { Telegraf } from 'telegraf'
import getEnv from './helpers/getEnv'


class TgBot {
  private static instance: Telegraf
  private constructor() {}
  
  public static getInstance(): Telegraf {
    if (!TgBot.instance) {
      const TG_TOKEN = getEnv('TG_TOKEN')
      TgBot.instance = new Telegraf(TG_TOKEN)
    }
    
    return TgBot.instance
  }
}

export default TgBot