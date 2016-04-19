var fs = require('fs'),
  utils = require('../utils'),
  protocol = require('../protocol')
  monitor = require('../monitor');


function init(email,senha){
  utils.log("info","iniciando as configurações...");
  var data = function(email,senha){
    this.email = email,
    this.senha = senha;
  }

  utils.log("info","gerando arquivo de configurações...");
  utils.writeConfig(JSON.stringify(new data(email,senha)),function(error,msg){
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
};


module.exports = init;
