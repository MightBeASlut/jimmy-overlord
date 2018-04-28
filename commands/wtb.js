const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let info = args.join(" ");
  
  let wtbEmbed = new Discord.RichEmbed()
  .setDescription("[WTB]")
  .setColor("#930000")
  .addField("User", `[${message.author}]`)
  .addField("INFO", info)
  .setFooter("Made by Jimmy ✦ Cracking Hacking");

  let wtbchannel = message.guild.channels.find(`name`, "wtb")
  message.reply({embed: {
  description: ":white_check_mark: Request has been added at #wtb",
  color: 1930000
}}).then(msg => {
   msg.delete(10000)
  })
  if(!wtbchannel) return message.channel.send("Couldn't find wtb channel");

  message.delete().catch(O_o=>{});
  wtbchannel.send(wtbEmbed);
}

module.exports.help = {
  name: "wtb"
}
