'use strict';

const program = require('commander');
const version = "1.0.0"
var acao = require('../action');


function commands(argv){
  help();
  init();
  create();
  start();
  return program;
}

var help = function(){
  program
  .command('help')
  .description('help application');
}

var init = function(){
  var email,senha;

  program
  .version(version)
  .command('init <email> <senha>')
  .description('boot application settings')
  .action(acao.init);
}

var create = function(){
  var email,senha;

  program
  .command('create <email> <senha>')
  .description('create user')
  .action(acao.create);
}

var start = function(){
  program
  .command('start')
  .description('start application')
  .action(acao.start);
}

module.exports = {
  process: function (argv) {
    return commands(argv);
  }
};






