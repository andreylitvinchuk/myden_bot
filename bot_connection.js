const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1063436179:AAFj8uNCBpBZtyVt6UI_5WwGG0PshDzawpI';
const proxy_host = 'grsst.s5.opennetwork.cc';
const proxy_port = 999;
const proxy_login = '137425727';
const proxy_password = 'V3Qco2WT';

const bot = new TelegramBot(token, {
	polling: true,
	request: {
		agentClass: Agent,
		agentOptions: {
			socksHost: proxy_host,
			socksPort: proxy_port,
			// If authorization is needed:
			socksUsername: proxy_login,
			socksPassword: proxy_password
		}
	}
})

exports.bot = bot