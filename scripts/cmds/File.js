const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100084918384589"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("(✪㉨✪) 𝖙𝖊𝖘 𝖕𝖆𝖗𝖊𝖓𝖙𝖘 𝖙-𝖔𝖓 𝖏𝖆𝖒𝖆𝖎𝖘 𝖆𝖕𝖕𝖗𝖎𝖘 𝖆 𝖗𝖊𝖘𝖕𝖊𝖈𝖙𝖊 𝖑𝖊𝖘 𝖆𝖋𝖋𝖆𝖎𝖙𝖊𝖘 𝖉𝖊𝖘 𝖌𝖗𝖆𝖓𝖉𝖘 🤦", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝚕𝚎 𝚏𝚒𝚌𝚑𝚒𝚎𝚛 ?? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`💫𝔫𝔬𝔱 𝔣𝔬𝔲𝔫𝔡 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
