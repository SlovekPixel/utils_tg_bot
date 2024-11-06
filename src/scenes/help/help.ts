import { Scenes } from 'telegraf'

const helpScene = new Scenes.BaseScene<Scenes.SceneContext>('helpScene')
helpScene.enter((ctx) => {
  return ctx.reply('Это справка бота. Как я могу помочь?')
})

export default helpScene