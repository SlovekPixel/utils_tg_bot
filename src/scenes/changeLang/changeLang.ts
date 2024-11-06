import { Scenes } from 'telegraf'

const changeLangScene = new Scenes.BaseScene<Scenes.SceneContext>('changeLangScene')
changeLangScene.enter((ctx) => {
  return ctx.reply('Выберите язык.')
})

export default changeLangScene