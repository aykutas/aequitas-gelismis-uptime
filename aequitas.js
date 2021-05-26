const { Client, Discord, MessageEmbed } = require("discord.js");
const aequitas = new Client({ disableEveryone: true });
const aequitasdatabase = require("croxydb");
const eklenenlink = aequitasdatabase.get("dblink");
const express = require("express");
const aequitasuptime = express();
aequitasuptime.listen(process.env.PORT);
const http = require("http");
require("express")().listen(1343);
	
aequitas.on("ready", async () => {
if (!Array.isArray(aequitasdatabase.get("dblink"))) {
aequitasdatabase.set("dblink", [])}
aequitas.user.setActivity(`Aequitas ❤️ Uptime`, { type: "STREAMING",url: "https://www.twitch.tv/aequitasuptime"})});

aequitas.on("message", async message => {
if (message.author.bot || message.guild) return;
let komut = message.content.split(' ');
var ekleniceklink = komut[1];
let aequitasembed = new MessageEmbed();
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\\



//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\\
aequitasuptime.get("/", (request, response) => { response.sendStatus(200) });
setInterval(() => { http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`) }, 280000);
setInterval(() => {
if (!eklenenlink) return;
var izleneceklink = eklenenlink.map(c => c.url);
izleneceklink.forEach(link => { try { fetch(link) } catch (e) {}})}, 60000);



if(komut[0].toLowerCase() === "yardım") {
message.channel.send(aequitasembed.setTitle(`> __**∞ Aequitas Uptime Yardım Menüsü ∞**__`).setDescription(`
> ◽ \`uptime\`: Botunuzu uptime eder.
> ◽ \`botsay\`: Uptime edilen bot sayısını gösterir.

**Kullanım:** \`uptime [link]\`

> 📍 **Not:** Bu bot \`aequitas ∞#1368\` tarafından yapılmıştır.`)
.setThumbnail(aequitas.user.avatarURL({dynamic:true}))
.setColor("#77069C"))};
                     
  
  
if(komut[0].toLowerCase() === "uptime") {
if(!ekleniceklink) return message.channel.send(aequitasembed.setDescription(`📍 | Lütfen uptime etmek istediğiniz linki giriniz!\nDoğru Kullanım: \`ekle [link]\``).setColor("RED"));
if(!ekleniceklink.includes('.glitch.me')) return message.channel.send(aequitasembed.setDescription(`📍 | Lütfen geçerli bir glitch linki girin!`).setColor("RED"));
if(eklenenlink.find(a => a.url === ekleniceklink)) return message.channel.send(aequitasembed.setDescription(`📍 | Bu bot zaten uptime ediliyor!`).setColor("RED"));
message.channel.send(aequitasembed.setImage(`https://cdn.discordapp.com/attachments/844518499220848660/846892457266380900/aequitasuptime.gif`).setColor("#FFFFFE"))
message.react("⚡");
aequitasdatabase.push("dblink", { url: ekleniceklink }).catch(e => {})};
  

  
if(komut[0].toLowerCase() === "botsay") {
message.channel.send(aequitasembed.setDescription(`**⚡ | Şuanda Toplam \`${aequitasdatabase.get("dblink").length}\` bot uptime ediliyor!**`).setColor("GREEN"))};
//∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞\\
  
  
});
aequitas.login(process.env.token).then(c => console.log(`-> Token ile giriş sağlandı - [ ${aequitas.user.username} ] - olarak görevimdeyim Aequitas!`)).catch(err => console.error("Hata:Token Bulunamadı/Yanlış Girildi!"));
