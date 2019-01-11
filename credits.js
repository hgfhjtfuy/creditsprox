const Discord = require('discord.js');
const Util = require('discord.js');
const Canvas = require("canvas")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const convert = require("hh-mm-ss");
const dateFormat = require('dateformat');
const figlet = require('figlet');
const request = require('request');
const gif = require("gif-search");
const zalgo = require("zalgolize");
const moment = require('moment');
const r1 = require('snekfetch'); const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 

const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);
const PREFIX = '#';

const queue = new Map();
const client = new Discord.Client({disableEveryone: true}); 

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); 
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
          client.user.setActivity("!help ً",{type: 'STREAMING'});   
});

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`!help `,"http://twitch.tv/IxAx7")
    client.user.setStatus("dnd")
 });


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**تم الأرسال في الخاص**');
            
	
		 


 message.author.sendMessage(`
 
      ➣Prox Bot By: @!       Ax7 🍺.#0010



╔[❖════════════❖]╗
     General  Commands
╚[❖════════════❖]╝

❖ !credits ➾ لمعرفة الرصيد

❖ !daily➾ لشحن الرصيد

==========================================






    client.on('message', message => {
        var prefix = "!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);


      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }


      }); 
  

  const fs = require('fs'); // npm i fs
const ms = require('ms'); // npm i ms
const cool = [];
client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;

  if(!credits[author]) credits[author] = {credits: 100};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

  
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;

    var number = `${one}${two}${three}${four}`;
    
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, قام بتحويل \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  } 
  
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
  
      var number = `${one}${two}${three}${four}`;

      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
    }
    cool.unshift(message.author.id);

    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();
    }, ms("1d"));
  }
});





client.on('ready',  () => {
    console.log('تم تشغيل : ➣BOT Cobra  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });







     

   
 




   



client.login(process.env.BOT_TOKEN);

