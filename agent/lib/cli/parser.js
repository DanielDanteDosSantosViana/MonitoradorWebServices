
var commands = require('./commands');

module.exports = parser;

function parser(argv){
  return commands.process();
}





