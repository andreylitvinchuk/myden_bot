const messages = {
  hello: (user) => `Привет, ${user.dataValues.name}.`,
  help: `Вот доступные команды:\r\n
        /help, [помоги] - вызов этой справки\r\n
        /list - список категорий
        /add Название категории - добавить категорию
        /rm category_id - удалить категорию`,
  list: (list) => `Вот список областей, которые у тебя получились: ${list.split('\r\n')}`,
}
exports.messages = messages