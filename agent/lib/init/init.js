var fs = require('fs'),
  utils = require('../utils'),
  protocol = require('../protocol')
  monitor = require('../monitor');


function init(){
  utils.log("info","iniciando as configurações...");
  utils.log("info","capturando pacotes HTTP ...");
  monitor.captor(function(lines){
    console.log(protocol.senderHTTP("post",JSON.stringify(lines),function(response){
        console.log(response.body);
     }));
  });


/*
  writeFileConfig(function(error,msg){
    if(error!=null){
       utils.log(error,msg);
       return;
    }

    utils.writeFileConfig();



    });

*/
};


module.exports = init;
