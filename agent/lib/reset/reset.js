var fs = require('fs'),
  utils = require('../utils');

function reset(){
  utils.log("info","Restartando o Agente ...");
  utils.log("info","Apagando configurações do usuário ");
  utils.config.deleteFileConfig(function(error){
    utils.log("error","Error ao apagar usuário: "+ error);
  }, function(data){
      utils.log("status","Configurações do usuário apagadas[OK]");
      utils.log("status","Restartado[OK]");
      utils.log("info","Acesse o Help do sistema 'mweba -h' para gerar novas configurações do usuário");
  });
};
module.exports = reset;
