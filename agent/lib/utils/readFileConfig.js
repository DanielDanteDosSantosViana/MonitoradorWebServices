var log = require('./log');
var fs = require('fs');

function readFileConfig(callback_error,callback_ok){
  fs.exists(process.cwd()+"/.mweba.json", function (exists) {
    if(exists){
      fs.readFile(process.cwd()+"/.mweba.json",function (err,data) {
        if (err!=null) {
          console.log("error"+err)
          callback_error(err);
        }else{
          console.log("ok"+data)
          callback_ok(data);

        }
      });
    }else{
       log("fail","não foi possível ler o arquivo de configuração. Acesse o help do sistema para informações de geração do arquivo de configuração 'mweba -h' ");
    }
  });
}


module.exports = writeFileConfig;
