import { Scenes } from 'telegraf'
import Markup from 'telegraf/markup'

const filesStorageScene = new Scenes.BaseScene<Scenes.SceneContext>('filesStorageScene')
filesStorageScene.enter((ctx) => {
  // const buttons = Markup.keyboard([
  //   [Markup.keyboard('Test', 'test')],
  //   [Markup.callbackButton('Test 2', 'test2')]
  // ])
  //   .resize()
  
  // ctx.reply('Это файловое хранилище. Выберите действие:', buttons)
})

filesStorageScene.hears('Получить файл', async (ctx) => {
  await ctx.reply('Список ваших файлов:')
})

filesStorageScene.hears('Загрузить файл', async (ctx) => {
  await ctx.reply('Пожалуйста, отправьте файл (до 10MB), который хотите сохранить.')
})

filesStorageScene.hears('Назад', (ctx) => {
  ctx.reply('Возвращаемся в главное меню...', Markup.removeKeyboard())
  ctx.scene.leave()
})

export default filesStorageScene