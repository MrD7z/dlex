const Discord = require('discord.js');
const fs = require("fs")
const moment = require('moment');
const client = new Discord.Client();
const prefix = '#';


client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);
	client.user.setActivity('Coffe',{type: 'WATCHING'});



});



/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'coffe123a')){
if(message.author.id !== '314677417954377730') return;
message.channel.sendMessage(`جار ارسال الرسالة |:white_check_mark: \n Message Has Been Sent For ${message.guild.members.size} Members`)
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

        
        client.on('message',async message => {
    var codes = "^";
    const sev = message.guild.channels.get(process.env.SEV);
    const ev = message.guild.channels.get('478434961142054912');
    const evc = message.guild.channels.get('476725999610888213');
    
              if(message.content.startsWith(codes + "start")) {
            if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return ;

                  await message.channel.send(`اكتب ما تريد ان تقول`).then(e => {
    let filter = m => m.author.id === message.author.id 
    
    
    
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
            co.first().delete()
            
            
            
            var reg = '';
                e.edit('اكتب الحالة')
                   let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
                 .then(co => {
                   reg = co.first().content
                     co.first().delete()
                     
                       
              var time = '';
                e.edit('اكتب االمدة')
                   let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
                 .then(co => {
                   time = co.first().content
                     co.first().delete()
                       e.delete()
                       
                 
            message.channel.send(`**هل أنت متأكد ؟ **`).then(msg => {
      
                msg.react('✅')
                 .then(() => msg.react('❌'))
                 .then(() =>msg.react('✅'))
             
                 let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
             
                 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

             
                        reaction1.on("collect", r => {
                            msg.delete();
                              sev.send(`${text} \n ${reg}`).then(m => {
                             m.react('❤');
                            setTimeout(() => {
                             
                          let users = m.reactions.get("❤").users;
                          let list = users.array().filter(u => u.id !== client.user.id);
                          let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                          let gFilters = list[Math.floor(Math.random() * list.length) + 0]
                           
                         m.delete();
                          ev.send('Players : '+ `\n${gFilter} \n${gFilters}`)
                          evc.send('everyone \n**بدينا الفعالية حياكم**');
                         },time * 60000);
                      });
                 })
                 
               reaction2.on("collect", r => {
                     msg.delete();
                     message.channel.send(`Canceled :v:`).then(m => m.delete(10000));
              
              })
                 
            })      
                 })
                 })
          })
                  })
              }
        });
                  
                 const profile = {};
client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
 
});         
              
        
client.on("message", (message) => {
	let men = message.mentions.users.first()
   
	if (message.author.bot) return;
	  if (message.author.id === client.user.id) return;
	  if(!message.channel.guild) return;
  if (message.content.startsWith('^credit')) {
	if(men) {
	  if (!profile[men.id]) profile[men.id] = {
	  lastDaily:'Not Collected',
	  credits: 1,
	};
	}
	if(men) {
  message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
  } else {
	message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
  }
  }
});
                 

client.login(process.env.TOKEN);
