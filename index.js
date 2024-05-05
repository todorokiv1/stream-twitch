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
        .setApplicationId('534203414247112723')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell`)
        .setDetails(`shadows of evil`)
        .setName(`shadows of evil`)
        .setState(`Ад, shadows of evil`)
        .setParty({
            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/754377615774842923/1083781876352819200/ce050454b14baa8a677c9fe3940bd094.jpg`)
        .setAssetsLargeText(`dead`)
        .setAssetsSmallImage(`mp:attachments/754377615774842923/1083782130930303126/e1a431f195998ae2c25ad1fc30f497c3.jpg`)
        .setAssetsSmallText(`decay`)
        .addButton(`rot`, `https://crosshead.tk/`)
        .addButton(`decay`, `https://feds.lol/grim`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN)
