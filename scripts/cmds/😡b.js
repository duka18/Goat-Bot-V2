module.exports = {
    config: {
        name: "😡",
        version: "1.0",
        author: "d𝐚vid",
        countDown: 5,
        role: 0,
        shortDescription: "commande 😐",
        longDescription: "commande Ok",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "😡") return message.reply("tu fera quoi bordel \n__◥✇◣, ,◢✇◤_");
    }
}
