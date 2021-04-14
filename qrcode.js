const {
  Client,
  Message,
  MessageEmbed,
  MessageAttachment,
} = require("discord.js");
const QRCode = require("qrcode");

module.exports = {
  name: "qrcode",
  description: "Converts Text in qr-code",
  category: "Information",
  usage: "CommandUsage",
  example: "CommandExample",
  aliases: ["qrc"],
  cooldown: "10s",
  run: async(client, message, args) => {
    const text = args.slice(0).join(" ");
    if (!text)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setDescription("Please enter some text!")
      );
    const image = await QRCode.toBuffer(text)
    message.channel.send(new MessageAttachment(image, "qrcode.png"));
  },
};

// make sure to read README.md
