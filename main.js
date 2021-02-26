const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles= fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


client.on('ready', () => {
	console.log('DoughBot is online!');
});


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '수칙') {
		client.commands.get('수칙').execute(message, args, Discord);
	} else if(command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === '여자') {
		client.commands.get('여자').execute(message, args);
	} else if (command === '남자') {
		client.commands.get('남자').execute(message, args);
	}
});


client.on('message', msg=>{
	if(msg.content === '바보호출') {
		msg.reply('옙!')
	} else if(msg.content === '도우봇아') {
		msg.reply('왜')
	} else if(msg.content === '사랑해') {
		msg.reply('응 꺼저')
	} else if(msg.content === '응') {
		msg.reply('아니야')
	} else if(msg.content === 'ㅗ') {
		msg.reply('반사')
	} else if(msg.content === '도우') {
		msg.reply('막강한 바보')
	} else if(msg.content === '설화') {
		msg.reply('두툼한 호빵맨')
	} else if(msg.content === '레아') {
		msg.reply('똥배의 망나뇽')
	} else if(msg.content === '챱샬떡') {
		msg.reply('말캉말캉 뱃샬떡')
	} else if(msg.content === '피쟈') {
		msg.reply('섹시의 화신')
	} else if(msg.content === '멍청이') {
		msg.reply('맞아 쟤 멍청함')
	} else if(msg.content === '귀척') {
		msg.reply('꺄')
		msg.reply('뀨')
		msg.reply('꾱')
	} else if(msg.content === '안녕') {
		msg.reply('하이ㅣ')
	} else if(msg.content === '뭐야') {
		msg.reply('웨저뤠')
	} 
})



client.login('ODE0MzQxNTQ5MDI2NDQzMzE1.YDccqw.OcdXOCgxzkg9sF823sMtho7aHK4');
