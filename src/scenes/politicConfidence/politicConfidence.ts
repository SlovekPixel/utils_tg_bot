import { Scenes } from 'telegraf'

const politicConfidenceScene = new Scenes.BaseScene<Scenes.SceneContext>('politicConfidenceScene')
politicConfidenceScene.enter((ctx) => {
  return ctx.reply('Здесь представлена политика конфиденциальности.')
})

export default politicConfidenceScene