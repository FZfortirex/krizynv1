let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  await m.reply('⏳Loading...')
    let kontol = `

╭─❒ 〘 𝗕 𝗢 𝗧   𝗜 𝗡 𝗙 𝗢 〙 
├ Creator :  @${global.owner[0]} 
├ Hostname : ${namabot}
├ Versi : 1.5.0
╰❒

╭─❒〘 𝗣 𝗜 𝗥 𝗔 𝗖 𝗬   𝗕 𝗢 𝗧 〙 
├ ➥JANGAN DISALAH GUNAKAN
├ ➥PRIBADI ANDA 
├  KAMI AKAN MENYIMPAN DATA
├  SEPERTI NOMER TELEPON
├  ANDA DI DATABASE KAMI
╰❒
`.trim()
  const button = {
        buttonText: 'Klik Disini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Owner', description: "CHAT BAGI YANG KEPENTINGAN", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.help = ['main']
handler.tags = ['infobot']
handler.command = handler.command = /^(infobot)$/i
module.exports = handler
