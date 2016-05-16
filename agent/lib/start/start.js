var fs = require('fs'),
  utils = require('../utils'),
  protocol = require('../protocol'),
  monitor = require('../monitor');


function start(){
  utils.log("info","Iniciando aplicação ...");
  utils.config.existsFile(function(exists){
      if(exists){
          var token = function(value){
              this.value = value;
          }
          utils.config.readFileConfig(
             function(error){
               utils.log("error","Error na leitura do arquivo de configuração :"+error);
              },
             function(data){
               var configJson = JSON.parse(data);
                protocol.validateToken(new token(configJson.token),function(response){
                  utils.log("status","Token válido[OK]");
                  utils.log("info","Esperando por Pacotes HTTP...");
                        monitor.captor(function(data){
                           data.push(new token(configJson.token));
                           utils.log("status","Pacote Recebido[OK]");
                              protocol.senderCapturedPackets(data,function(response){
                                utils.log("status","Pacote enviado [OK]");
                              }, function(error,msg){
                                utils.log("error",error+" : " +msg);
                              })
                        });
                      }, function(error,msg){
                         utils.log("error",error+" : " +msg);
                });
          });

      }else{
             utils.log("error","Usuário não foi criado e autenticado");
             utils.log("info","Por favor , acesse o help do sistema através do comando ' mweba -h ' e veja como criar e autenticar seu usuário");
      }
  });
};


module.exports = start;
