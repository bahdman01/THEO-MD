const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/J03Qd2YD/photo-2024-06-04-13-25-00.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕆𝕝𝕒😈🦍 MD" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/J03Qd2YD/photo-2024-06-04-13-25-00.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_23_08_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNllEMW83dWQwdEo2bTFsYVY3WlJMZEV0TGdLdWplS2Y0VnRLd3BxRTZwcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX1lfaTF4cmFRcnVQVmQ4cnFVWlVZQVwiLFxuICBcInBob25lSWRcIjogXCI2MDc4ODVlNS0xMTdjLTQzODctYTBkMi02NmE5ZmNmMmQwNDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgNTEsXG4gICAgICAxOTUsXG4gICAgICA3MyxcbiAgICAgIDU1LFxuICAgICAgMTM1LFxuICAgICAgMTgsXG4gICAgICAxMzAsXG4gICAgICAxNDksXG4gICAgICAyMzUsXG4gICAgICA2LFxuICAgICAgOCxcbiAgICAgIDE1NCxcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDQxLFxuICAgICAgNjYsXG4gICAgICAzMyxcbiAgICAgIDEwNyxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgODEsXG4gICAgICAxNCxcbiAgICAgIDI0NyxcbiAgICAgIDgzLFxuICAgICAgNDksXG4gICAgICAxMjgsXG4gICAgICAyNTMsXG4gICAgICAxNjUsXG4gICAgICAxNzQsXG4gICAgICA2OSxcbiAgICAgIDEwMixcbiAgICAgIDIwNyxcbiAgICAgIDEzMSxcbiAgICAgIDE5MSxcbiAgICAgIDQwLFxuICAgICAgMjQ2LFxuICAgICAgNzQsXG4gICAgICAyMDMsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMnZ5cmdDRU1UOCs3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpDV0FISkRBVXRtZWk0S0t4TXlEU241bkI4NWoxYkJKbENpekxwSUV5RjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXlpV3RObWthU2NMbFlUNEhjMDBOdzZjWlNXU0xSSnRhdW1FQSthVytVVzJNdkxwQVhXTk9YeHRkK3hudTh6QXE5MXRhQlp0NHRJdEFkZmR2bGxsQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaitHL3l0UTJDcVR1Rk03czJEc041V1J2V3IyNlBrQW5zNjJBKzZrYXBNZjMzVnFLa2FINmJvSEcyUm4rdGhTT3BOMDNZeFk5aVpEN2RrTURCK1FzaHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ1NDcyODU5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczMjE2ODEwODQwMDcyOjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ1NDcyODU5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzc5Mjk3M1xufSIKfQ==" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝕆𝕝𝕒😈🦍 MD 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕆𝕝𝕒😈🦍 MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
