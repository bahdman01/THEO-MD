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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHSHB5dE5FdU1MRFYrWUR4NGgrRCtwR0FXc0d2NHluZTgwaGdmRWdRdU44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyX0g2REJNa1FGMlQwNV9QSTlQOXFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2Zjg4MzkzLWU4MzgtNDVmZi1hMzBjLTZlNTgyNjQ5YTY1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDEyNyxcbiAgICAgIDMsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDc0LFxuICAgICAgMTc5LFxuICAgICAgNTQsXG4gICAgICA1OCxcbiAgICAgIDgzLFxuICAgICAgMTQ2LFxuICAgICAgNCxcbiAgICAgIDE0NixcbiAgICAgIDE2OSxcbiAgICAgIDYsXG4gICAgICAyMzQsXG4gICAgICA3MixcbiAgICAgIDEwNixcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDEwNixcbiAgICAgIDQ2LFxuICAgICAgMjUzLFxuICAgICAgMTYsXG4gICAgICA5MCxcbiAgICAgIDE2MSxcbiAgICAgIDE0OCxcbiAgICAgIDE3MSxcbiAgICAgIDE5MyxcbiAgICAgIDczLFxuICAgICAgMjA3LFxuICAgICAgMTcwLFxuICAgICAgMTk2LFxuICAgICAgODMsXG4gICAgICAyMTksXG4gICAgICA3NixcbiAgICAgIDMwLFxuICAgICAgNDIsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042VHgrb0ZFT2oreTdZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkxSR3IyY1k2SHNpSUtlUW9YTUZwcVh1U0VYN3ZZOFd1ZVVyWXhwejZscz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoQnJvMnF0eXhFMzkzMzh3U2FQWFY3MWN3QXJ1QlEwOFhoOG0vWlg0WHJRUFo5cWFoTHlVeEIwMndYR213WUwyLzBvbDBGNDFxQStMNExoMFFsWHVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTcGd1RWt3WC9ScEtjeVFkUnFyaHpwSlZVOE5DQVFlRUhmamhwUFN2TnlDWlFCKzg3dkMvM0ZtdEl1YUJFVmV1OUJiVjM3K0NxblFTNlFpWVljRmlDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQyNTA0OTM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxMjI4OTc1NjY1MzY4OjEwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NDI1MDQ5MzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUxMDM5ODBcbn0iCn0=" //PUT SESSION-ID HERE


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
