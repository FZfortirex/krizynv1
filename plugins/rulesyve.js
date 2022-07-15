let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═════〘 DONASI 〙 ═
╠➥ PULSA [6285728581059]
╰═══〘 ${namabot} 〙 ═

╭═══════〘 PRIVASI BOT 〙═══
➥Kebijakan Privasi

1. Owner tidak akan merekam data riwayat chat user.
2. Owner tidak akan menyebarkan nomor users.
3. Owner tidak akan menyimpan media yang dikirimkan oleh users.
4. Owner tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.
╭═══════════════════════
➥Peraturan Bot

1. Users dilarang menelpon maupun video call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
╭═══════════════════════
➥Syarat Ketentuan Bot

1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Bot dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
╰═══════════════════════
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
handler.tags = ['rulesprivasi']
handler.command = handler.command = /^(rulesprivasi)$/i
module.exports = handler
