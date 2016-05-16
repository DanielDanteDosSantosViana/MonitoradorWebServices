'use strict';

const program = require('commander');
const version = "1.0.0"
var acao = require('../action');


function commands(argv){
  help();
  init();
  create();
  start();
  reset();

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

var reset = function(){
  program
  .command('reset')
  .description('reset user and application')
  .action(acao.reset);
}

module.exports = {
  process: function (argv) {
    return commands(argv);
  }
};






