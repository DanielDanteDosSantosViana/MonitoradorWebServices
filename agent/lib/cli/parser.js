
const program = require('commander');

module.exports = parser;

function parser(argv){

program
  .version('0.0.1')
  .command('init')
  .description('boot application settings')
  .option('-pw, --password','set password')
  .option('-usr, --user','set user')
  .action(log);

program.parse(argv);

}
var log = function(){
  console.log("inicializou");
}


