'use strict';

const program = require('commander');

function commands(argv){
  help();
  init();

  return program;
}

var help = function(){

  program
  .command('help')
  .description('help application');
}

var init = function(){
  program
  .version('0.0.1')
  .command('init')
  .description('boot application settings')
  .option('-pw, --password','set password')
  .option('-usr, --user','set user');
}

module.exports = {
  process: function (argv) {
    return commands(argv);
  },
};






