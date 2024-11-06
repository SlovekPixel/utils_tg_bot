import { Scenes } from 'telegraf'

const ownerInfoScene = new Scenes.BaseScene<Scenes.SceneContext>('ownerInfoScene')
ownerInfoScene.enter((ctx) => {
  return ctx.reply('Информация об авторе бота.')
})

export default ownerInfoScene