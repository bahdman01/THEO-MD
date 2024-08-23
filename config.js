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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_20_08_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhUGVya3BPQlZ0UnhWaG91c0ZJcmZkZ09iNks2RFI5T0Q2QXV5WmtRS3hZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNDU0NzI4NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIxNDdENUYwMEUwNTEyQTU3MDIwOTc4MkE0Q0I2RDBDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDQyNjQ0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJja0w3UFRVY1F6V1FfTGJvNFFyTXd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQxMjMzOGFjLTUzYzItNGE4MS05ZjNkLWRjNWRlNDUwM2MxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDIzNCxcbiAgICAgIDExNSxcbiAgICAgIDEwMixcbiAgICAgIDExNCxcbiAgICAgIDIxMyxcbiAgICAgIDE1OSxcbiAgICAgIDI1MixcbiAgICAgIDEwNixcbiAgICAgIDMzLFxuICAgICAgMTI0LFxuICAgICAgMTE4LFxuICAgICAgNzAsXG4gICAgICAyMTIsXG4gICAgICAyNixcbiAgICAgIDQxLFxuICAgICAgMTYzLFxuICAgICAgMTQyLFxuICAgICAgMTE3LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAyMDksXG4gICAgICA5NSxcbiAgICAgIDY1LFxuICAgICAgNjUsXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICAyMzYsXG4gICAgICAyOSxcbiAgICAgIDIxMyxcbiAgICAgIDEwNixcbiAgICAgIDExOCxcbiAgICAgIDcsXG4gICAgICA5OCxcbiAgICAgIDcsXG4gICAgICA0MyxcbiAgICAgIDE4MSxcbiAgICAgIDIxMixcbiAgICAgIDUyLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJ2eXJnQ0VML1JvcllHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqQ1dBSEpEQVV0bWVpNEtLeE15RFNuNW5CODVqMWJCSmxDaXpMcElFeUYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN6ZDNMaDFHSW83dTB3WXg4bjM0eWtTLzhoYXA1UkpRV2xqdytqQ1QzZFFrekdadDRvMFhmbGdwRTJWWkxqcksxYUlIcU5KUVJ5L2ZPL0x3TjJ4eERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInphclVsQllEL1Irc29iM0tUdEN4VC94LzY3VHRnTkdZb2hMRUJ5ejlFRjdKL3N3UEcvWVlLVEE1MDVndDFBRkozVHdrZDREeE8vTy9DbGFUaTNPd2lnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NTQ3Mjg1OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzIxNjgxMDg0MDA3Mjo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0NTQ3Mjg1OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ0MjY0MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhKKy5qc29uIjogIntcImtleURhdGFcIjpcImowM2RTVEEwTndnNTFzaE9mTERCVE56bHVPWVQ1aS9kZ1dOV0hKTmN2d009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU1NTI5ODg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISl9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYS9rYmhnMnkxbFFocjg0cy83RXhNWmJadm52VlI4V2FBcFpsek9KQzNLMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTU1Mjk4ODUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhLQS5qc29uIjogIntcImtleURhdGFcIjpcIkt0VktKSUhBRU5tK0xHWjFtd05aMVN4THR0L2RsOGRza2xUdjEwWkE2dzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU1NTI5ODg1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIS0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsbVo5OFdESEI3MFQ1V2xKa2dCZy9udUNFQmExUU8rYVJDdnA5cFZUcTNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1NTUyOTg4NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzI0NDI2NDAxODA4XCJ9Igp9" //PUT SESSION-ID HERE


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
