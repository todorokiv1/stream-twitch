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
    .setDetails(`𝐁𝐄𝐃 𝐓𝐈𝐌𝐄`)
    .setName(`𝐓𝐎𝐃𝐎𝐑𝐎𝐊𝐈`)
    .setState(`𝐃𝐫𝐞𝐚𝐦 𝐖𝐨𝐫𝐥𝐝......`)
    .setParty({
      max: 5000,
      current: 1111,
      id: Discord.getUUID(),
    })
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1108081101328629823/1236764044174561381/image0.gif?ex=663931c6&is=6637e046&hm=7c8b64867caebf7f68473a2cf0134523716bef2f8207fc6aff770b1ff1bf5ff6&')
    .setAssetsLargeText(`𝐃𝐄𝐀𝐃`)
    .setAssetsSmallImage(`https://media.discordapp.net/attachments/1108081101328629823/1236764044174561381/image0.gif?ex=663931c6&is=6637e046&hm=7c8b64867caebf7f68473a2cf0134523716bef2f8207fc6aff770b1ff1bf5ff6&`)
    .setAssetsSmallText(`decay`)
    .addButton(`すべてマイクな`, `https://youtu.be/zYNhoj-3H8E?si=V5P8IU9mJoIm8Uku`)
    .addButton(`すべてマイク`, `https://youtu.be/hH8jxbaSdQk`);
  client.user.setActivity(rpc.toJSON());

  console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.token);
