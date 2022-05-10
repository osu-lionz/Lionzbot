const { MessageEmbed } = require("discord.js")
const api = require('../../Constants/api.js')
const botConfig = require('../../../Config.js')

module.exports = {
    name: "help",
    run: async(client, message, args, container) => {
        message.channel.send("Searching...").then(async msg => {

            let playercount = await api().get('get_player_count', {
                params: {
                }
                });
                
            let lastplayer = await api().get('get_player_info', {
                params: {
                    id: playercount.data.counts.total+1,
                    scope: 'all'
                }
                });

            const embed = new MessageEmbed()
                .setColor('#B65FCF')
                .setTitle(`Bot Commands`)
                .setURL(`https://${botConfig.domain.replace('https://','')}/`)
                .setDescription(`**Important:**\n bot! osuset **username** (To set your server username)\n bot! info (General server information)\nbot! osuavatar (Shows your current avatar)\n\n **Standard:**\n bot! osu (Shows your std profile details)\n bot! ml (Will show the top 10 scores for current map)\n bot! rs (Shows your most recent score)\n bot! osutop / top (Shows your top 5 scores)\n\n **Relax:**\n bot! relax (Shows your rx profile details)\n bot! rlb (Shows the top 50 relax leaderboards)\n bot! rxr (Shows your most recent rx score)\n bot! rxtop (Shows your top 5 rx scores)\n\n For other modes please refer to the github for a full commandlist\n\n**Github:** https://github.com/osu-lionz/Lionzbot\n **Website:** [${(botConfig.domain.replace('https://','')).replace('/','')}](${botConfig.domain})\n**Contact:** Lionz#0366`)
                .setThumbnail(`https://${botConfig.logourl.replace('https://','')}`)
            
            msg.delete();
            message.channel.send({embeds: [embed]});
        })
    }
}
