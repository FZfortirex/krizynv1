let handler = function (m) {
	this.sendContact(m.chat, '6285728581059', 'Owner Burhanuddin Zain', m)
}

handler.customPrefix = ['🍭Owner Zain'] 
handler.command = new RegExp

module.exports = handler
