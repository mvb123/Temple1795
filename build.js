const fs = require('fs');
const { DB_META, CORE, R } = require('./data.js');
const tpl = fs.readFileSync('template.html', 'utf8');
const json = JSON.stringify({ DB_META, CORE, R })
  .replace(/<\/script/gi, '<\\/script');
const html = tpl.replace('/*__DATA__*/', json);
fs.writeFileSync('index.html', html);
console.log('index.html written:', html.length, 'bytes;', R.length, 'records');
