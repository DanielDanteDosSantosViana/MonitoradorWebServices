var utils = require('../utils'),
  protocol = require('../protocol')

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

            utils.config.writeFileConfig(JSON.stringify(new configUser(email,senha,token)),function(err,msg){
                    utils.log("status","Arquivo Gerado[OK]");
                    utils.log("status","Token de acesso aos dados: "+token);
            });
          }, function(error,msg){
              utils.log("error",msg);
          });
      }else{
             utils.log("error","Usuário já autenticado");
      }
  });

};


module.exports = init;
