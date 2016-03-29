var color = require('./color');

var coding = {
  log: 'black',
  info: 'yellow',
  status: 'green',
  detail: 'yellow',
  fail: 'red',
  error: 'red',
};


function log(type,text){
  var msg = '[mweba] ' + (text || '');
  msg = color(coding[type], msg);
  console.log(msg || '');
}

module.exports = log;
