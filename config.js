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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPdXpleHl1NVBLYjgwa09PMnR1UURFVFgxSFBCa1JoenlXVnpRVzdUVTkwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNDU0NzI4NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYyNjdDNDUxNTk4OURCRUYzQkE1MEYzQUI4MjlCOTk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjEzNzE3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDYWstT19LZFJiQ3RPWktmUVBOUG53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA5YjA3ZjZmLWQ1MTAtNDBhMi05Y2MyLTk5MzQ5ZGIwMzgxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDgwLFxuICAgICAgMzcsXG4gICAgICAxNDcsXG4gICAgICA1OSxcbiAgICAgIDE2NCxcbiAgICAgIDE3NCxcbiAgICAgIDkyLFxuICAgICAgMzcsXG4gICAgICAyMDksXG4gICAgICAxNTgsXG4gICAgICA1NCxcbiAgICAgIDI4LFxuICAgICAgMTQzLFxuICAgICAgNzYsXG4gICAgICAxNzcsXG4gICAgICA2NSxcbiAgICAgIDIzLFxuICAgICAgMjM0LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDI0OCxcbiAgICAgIDE3NSxcbiAgICAgIDIyOSxcbiAgICAgIDk4LFxuICAgICAgMTk2LFxuICAgICAgOTUsXG4gICAgICAxOTAsXG4gICAgICAxNDksXG4gICAgICAyMzEsXG4gICAgICA3MCxcbiAgICAgIDIzLFxuICAgICAgMTMyLFxuICAgICAgMTcxLFxuICAgICAgMjM3LFxuICAgICAgMTg5LFxuICAgICAgMTgwLFxuICAgICAgMTQ2LFxuICAgICAgMTk1LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMnZ5cmdDRU1tR2k3Y0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpDV0FISkRBVXRtZWk0S0t4TXlEU241bkI4NWoxYkJKbENpekxwSUV5RjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUJJYW5WRTc5c3JTUkpHcTZKaC9Va0F0emhDTlNwajlPazViOXpRaG5zaVQ2QjBqYkF5SDNVa2V2WG1wK3h3Yy9KQ0d2MnJzQ29zQ2dJaG1ZR1lPRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWlVOQndxWHFIZEM3SmxjMlFYM1JGSDdqdUZGeWxiaDlBK2QrbFZSaW9wSVYwc2hJeWpIUUtNVUlMb203eEMyb012bFJRbFZCK1NpVENheVEwMEZqalE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ1NDcyODU5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczMjE2ODEwODQwMDcyOjdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ1NDcyODU5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjEzNzE2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhKK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEorLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajAzZFNUQTBOd2c1MXNoT2ZMREJUTnpsdU9ZVDVpL2RnV05XSEpOY3Z3TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTU1Mjk4ODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhKX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhL2tiaGcyeTFsUWhyODRzLzdFeE1aYlp2bnZWUjhXYUFwWmx6T0pDM0swPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1NTUyOTg4NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEtBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS3RWS0pJSEFFTm0rTEdaMW13TloxU3hMdHQvZGw4ZHNrbFR2MTBaQTZ3ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTU1Mjk4ODUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhLQi5qc29uIjogIntcImtleURhdGFcIjpcImxtWjk4V0RIQjcwVDVXbEprZ0JnL251Q0VCYTFRTythUkN2cDlwVlRxM0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU1NTI5ODg1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIS0MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwKzZTeHk2RmY5eGtwc3ZyWHh0WXUvcUtVdFhJM0JXdFJMSzl0MVBZaFVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1NTUyOTg4NSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEtELmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDd4QXdQUi9qNlM3a2QyOXpEbzl4TjBTNXJDSFVMU3EzcnpCdDNoMndqND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTU1Mjk4ODUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjEzNzE0ODIwN1wifSIKfQ==" //PUT SESSION-ID HERE


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
