import {Scenes} from 'telegraf'

const cashTrackingScene = new Scenes.BaseScene<Scenes.SceneContext>('cashTrackingScene')
cashTrackingScene.enter((ctx) => {
  return ctx.reply('Выберите опцию для отслеживания финансов.')
})

export default cashTrackingScene