var log = require('./log');
var fs = require('fs');


function config(){
  this.readFileConfig = readFileConfig;
  this.writeFileConfig = writeFileConfig;
  this.existsFile = existsFile;
}


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

function writeFileConfig(data,callback){
   fs.writeFile(process.cwd()+"/.mweba.json",data, function(err){
          if(err) {
              callback("error",err);
          }else{
            callback(null,"ok");
          }
      });
  }

function existsFile(callback_result){
  fs.exists(process.cwd()+"/.mweba.json", function (exists) {
    return callback_result(exists);

   });
}


module.exports = function(){
 return new config();
}
