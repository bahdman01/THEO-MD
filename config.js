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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_52_08_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDQxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVktZSmNmNmtrRHdzOE5rMk5iOU9BRHZRQzhSVjNCTjVSNnFqUnRKZ0gzMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEgxbElLWHdUSEMtZUVTWnRXNl9aUVwiLFxuICBcInBob25lSWRcIjogXCJhOGVkZTc3Yy1lMDc0LTQ2MGYtYTIxMi1iYWVjOGZhNzBiNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTAxLFxuICAgICAgOTgsXG4gICAgICAyNSxcbiAgICAgIDMwLFxuICAgICAgMTQwLFxuICAgICAgMjI3LFxuICAgICAgODIsXG4gICAgICAyMjQsXG4gICAgICAxNTQsXG4gICAgICAxMTksXG4gICAgICAxMjMsXG4gICAgICA5LFxuICAgICAgMTY4LFxuICAgICAgMzcsXG4gICAgICA2NyxcbiAgICAgIDY0LFxuICAgICAgMjUxLFxuICAgICAgMTIxLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDI0NixcbiAgICAgIDk1LFxuICAgICAgNTcsXG4gICAgICA4NSxcbiAgICAgIDE5LFxuICAgICAgMjAsXG4gICAgICAxOCxcbiAgICAgIDYxLFxuICAgICAgMTc1LFxuICAgICAgNDgsXG4gICAgICAwLFxuICAgICAgMzgsXG4gICAgICAyMTMsXG4gICAgICAyMDQsXG4gICAgICAyNDIsXG4gICAgICAyNTMsXG4gICAgICA4MyxcbiAgICAgIDI0NCxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSDhQVFRCQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDk4MzQ2Nzo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRoZW9cIixcbiAgICBcImxpZFwiOiBcIjEzNzkxNDkyMzYyMzY5OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vbWdGc1F5cFNjdGdZWU1DQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRlhQbFZ1ek9NVTh1Y3JId3ZOamNOaU53b1lzTEpZVTd5WFdJQWZzemVDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1V3RIQStBWEd3Ulh1eDZocGRmREFUZmszdVRkNUxOMURZYlBPUVZBaVBhbG9hUjFpakpuOWl3SXBxMzY1RHNwMjVvbVRobUI5cmFPL1dlUVJuSkpDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5alhBZFE5cE04OGdJVkJQMFRxV0pZR0xNdU5WWXB1OEZOZmNEaXhjdjQ2Q1hldFRDbVI1akJWcWkxZFVtYmpCYWtKKzFsVGd4SkQvZERrNUp5Vy9nZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM0OTgzNDY3OjkzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDMyMDMzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" //PUT SESSION-ID HERE


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
