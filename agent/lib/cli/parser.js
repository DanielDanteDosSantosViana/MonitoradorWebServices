
var commands = require('./commands');

module.exports = parser;

function parser(argv){
  commands
  .process(argv)
  .parse(argv);
}





