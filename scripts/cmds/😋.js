module.exports = {
    config: {
        name: "😋",
        version: "1.0",
        author: "𝐦𝐚𝐝𝐚𝐫𝐚",
        countDown: 5,
        role: 0,
        shortDescription: "commande ☝️",
        longDescription: "commande O☝️k",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "😋","😛","😝","😜","🤪") return message.reply("la vie_◥✇◣, ,◢✇◤_est belle");
    }
}
