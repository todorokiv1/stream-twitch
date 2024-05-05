require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
  console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false
});

client.on('ready', async () => {

  const rpc = new Discord.RichPresence()
    .setApplicationId("1043168841326403594")
    .setType('STREAMING')
    .setURL(`https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell`)
    .setDetails(`𝐓𝐎𝐃𝐎𝐑𝐎𝐊𝐈 𝐅𝐈𝐆𝐇𝐓 𝐃𝐄𝐌𝐎𝐍`)
    .setName(`𝐓𝐎𝐃𝐎𝐑𝐎𝐊𝐈`)
    .setState(`𝐆𝐎 𝐆𝐎 𝐓𝐎𝐃𝐎`)
    .setParty({
      max: 5000,
      current: 1001,
      id: Discord.getUUID(),
    })
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1068885516885426257/1158315018639654922/166.gif?ex=651bcc6c&is=651a7aec&hm=4388144e419a7a69b726a753ca08b413033527dbe42766af3d7050d2554686dc&')
    .setAssetsLargeText(`𝐃𝐄𝐀𝐃`)
    .setAssetsSmallImage(`https://media.discordapp.net/attachments/1068885516885426257/1158315174441267252/tumblr_mtzurjX6gR1scepo2o1_500.gif?ex=651bcc92&is=651a7b12&hm=a4f1dc87267693e8265bae6046915106bf565b3bbcbb398e6b92c46ab9d1477e&`)
    .setAssetsSmallText(`decay`)
    .addButton(`すべてマイクな`, `https://youtu.be/zYNhoj-3H8E?si=V5P8IU9mJoIm8Uku`)
    .addButton(`すべてマイク`, `https://youtu.be/hH8jxbaSdQk`);
  client.user.setActivity(rpc.toJSON());

  console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
