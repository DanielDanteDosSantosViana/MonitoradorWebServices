'use strict';

const program = require('commander');
var acao = require('../action');

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
  .action(acao.init);
}

module.exports = {
  process: function (argv) {
    return commands(argv);
  }
};






