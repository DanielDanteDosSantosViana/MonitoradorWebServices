var fs = require('fs'),
  utils = require('../utils'),
  protocol = require('../protocol')
  monitor = require('../monitor');


function init(email,senha){

  var configUser = function(email,senha,token){
    this.email = email,
    this.senha = senha;
    this.token = token;
  }

  utils.log("info","Init...");
  utils.log("info","Autenticando usuário...");

  utils.config.existsFile(function(exists){

      if(!exists){
        protocol.authentication(new configUser(email,senha,null),function(response){
            utils.log("status","Usuário autenticado[OK]");
            utils.log("info","Gerando arquivo de configuração...");
            var token = response.body.Token;

            utils.log("info",token);
            utils.config.writeFileConfig(JSON.stringify(new configUser(email,senha,token)),function(err,msg){
                    utils.log("status","Arquivo Gerado[OK]");
            });
          }, function(error,msg){
              utils.log("error",msg);
          });
      }else{
             utils.log("error","Usuário já autenticado");
      }
  });





 // utils.log("status","Configurações feitas com sucesso[OK]");













/*
  utils.log("info","gerando arquivo de configurações...");
  utils.config.writeFileConfig(JSON.stringify(new data(email,senha)),
    function(error,msg){
    utils.log("info",error);

    if(error!=null){
      utils.log(error,msg);
    }else{
        utils.log("info","arquivo de configurações gerado.");
        utils.log("info","autenticando usuário...");
        protocol.authentication(function(response){
            if(response.body.token!=null){
              utils.log("info","capturando pacotes HTTP ...");
              monitor.captor(function(lines){
                   protocol.senderHTTP("post",JSON.stringify(lines),function(response){
                    console.log(response.body);
                 });
              });
            }else{
              utils.log("error","Usuário não autenticado");
            }
          },function(error,msg){
            console.log(msg)
        });
   }
  });
  */
};


module.exports = init;
