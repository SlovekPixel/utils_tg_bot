export enum menuButtons {
  help = "Справка бота",
  files_storage = "Файловое хранилище",
  cash_tracking = "Отслеживание финансов",
  change_lang = "Изменить язык",
  owner_info = "Инфомация об авторе",
  politic_confidence = "Политика конфиденциальности",
}

const buttonNames = Object.keys(menuButtons)
const tgCommands = Object.values(menuButtons).map((description, index) => {
  const command = buttonNames[index]
  return { command, description }
})

export default tgCommands