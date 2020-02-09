const { messages } = require("./messages.js");
const { bot } = require("./bot_connection.js")
const { User } = require("./models")


// "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

// /help
bot.onText(/\/help/, (msg, match) => {
  bot.sendMessage(msg.chat.id, messages.help);
});

bot.onText(/помоги/, (msg, match) => {
  bot.sendMessage(msg.chat.id, messages.help);
});

// /start
bot.onText(/\/start/, (msg, match) => {
  User.findOrCreate({
    where: { chat_id: msg.chat.id },
    defaults: { name: msg.from.first_name }
  }).then(([user, created]) => {
    bot.sendMessage(msg.chat.id, messages.hello(user));
  });
});

bot.onText(/\/add (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const aimTitle = match[1];
  Aim.findOrCreate({
    where: {
      chat_id: msg.chat.id,
      title: aimTitle
    },
    defaults: { name: msg.from.first_name }
  }).then(([user, created]) => {
    console.log(user);
    bot.sendMessage(msg.chat.id, messages.hello(user));
  });
  bot.sendMessage(chatId, aimTitle);
});


// All messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  console.log(msg);
});

// log error
bot.on("polling_error", (msg) => console.log(msg));