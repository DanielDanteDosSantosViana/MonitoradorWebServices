var fs = require('fs'),
  utils = require('../utils'),
  protocol = require('../protocol')


function start(){
  utils.log("info","Iniciando aplicação ...");
  utils.config.existsFile(function(exists){
      if(exists){
             utils.log("status","Capturando pacotes HTTP ...");
      }else{
             utils.log("error","Usuário não foi criado e autenticado");
             utils.log("status","Por favor , acesse o help do sistema através do comando ' mweba -h ' e veja como criar e autenticar seu usuário");
      }
  });
};


module.exports = start;
