// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://instagram.com/dnzainn'
global.linkGC = ['https://chat.whatsapp.com/JJJwh9W3usgEflQ4QIeqvu', ''] // ganti jadi group lu
global.owner = ['6285728581059','6285728581059'] // Put your number here //owner eval
global.kontak = ['6285728581059','6285728581059'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285728581059','6285728581059'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `*Kalau udah dikasih, bilang apa?*`
namakontak1 = 'ᴹᴿ𝙄𝙩𝙨𝙠𝙧𝙞 ×፝֟͜×'
namakontak2 = '𝙆𝙧𝙞𝙯𝙮𝙣×͜×'

//kasihcaption = `Kalau udah dikasih, bilang apa?`

// Sticker WM
global.packname = '@CEMARA' // ganti aja
global.author = '@CEMARA' // ganti aja

//yyy
'@CEMARA' // Broadcast
footer = '@CEMARA' // Broadcast
footer = '@CEMARA'
namabot = '@CEMARA'
namalu = '@dnzainn'


// 
wait = '⏳𝙎𝙚𝙙𝙖𝙣𝙜 𝙙𝙞𝙥𝙧𝙤𝙨𝙚𝙨...'
global.wait = '⏳𝙎𝙚𝙙𝙖𝙣𝙜 𝙙𝙞𝙥𝙧𝙤𝙨𝙚𝙨...'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.eror = '❗𝙎𝙚𝙧𝙫𝙚𝙧 𝙀𝙧𝙧𝙤𝙧...'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '@CEMARA' //change the watermark 
global.image = 'https://telegra.ph/file/6e060c1c8836dc974674e.jpg' //change the image
global.thumbfoto = 'https://telegra.ph/file/6e060c1c8836dc974674e.jpg'

// image
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/01917f7782b70de8f418d.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
