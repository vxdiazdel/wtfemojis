const fs = require('fs');
const shortid = require('shortid');

const data = fs.readFileSync('config/data.json', 'utf8');
const emojiList = Array.from(JSON.parse(data));

const emojis = emojiList.map(item => Object.assign( {}, item, { _id: shortid.generate() }))

fs.writeFileSync('config/emojis_new.json', JSON.stringify(emojis));
