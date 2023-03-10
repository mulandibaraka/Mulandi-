// Owner number
global.owner = '254769527061'
// Owner name
global.owner_name = 'Naruto 🗿🚬'
// Maximum upload file size limit (Default : 50 MB)
global.max_upload = 5000
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 25)
global.limit = 150
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = '254769527061@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '171035'
global.chatai_key = 'vE3xJMwXVmWPMJcB'
// Source version
global.version = '2.0',
// Bot name
global.botname = `Spike Ai v${global.version} `
// Footer text
global.footer = 'Spike Ai'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Processing . . .'),
   invalid: Func.texted('bold', 'URL provided is Invalid!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Repeat the command again! 🗿🚬 -_-'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Sorry this command has an error which has not been fixed.'),
   premium: Func.texted('bold', 'This feature only for premium user.'),
   owner: Func.texted('bold', 'Only my Owner can use this command. 🗿🚬 -_- '),
   god: Func.texted('bold', 'This command only for Owner'),
   group: Func.texted('bold', 'This command works in groups.'),
   botAdmin: Func.texted('bold', 'I am not an admin.. 🗿🚬 -_-'),
   admin: Func.texted('bold', 'You are not even an admin. 🗿🚬 -_-'),
   private: Func.texted('bold', 'Command meant for private chat.')
})
