var log = require('./log');
var fs = require('fs');


function config(){
  this.readFileConfig = readFileConfig;
  this.writeFileConfig = writeFileConfig;
  this.existsFile = existsFile;
  this.deleteFileConfig = deleteFileConfig;

}


function readFileConfig(callback_error,callback_ok){
  fs.exists(process.cwd()+"/.mweba.json", function (exists) {
    if(exists){
      fs.readFile(process.cwd()+"/.mweba.json",function (err,data) {
        if (err!=null) {
          callback_error(err);
        }else{
          callback_ok(data);

        }
      });
    }else{
       log("fail","não foi possível ler o arquivo de configuração. Acesse o help do sistema para informações de geração do arquivo de configuração 'mweba -h' ");
    }
  });
}

function deleteFileConfig(callback_error,callback_ok){
  fs.exists(process.cwd()+"/.mweba.json", function (exists) {
    if(exists){
        fs.unlink(process.cwd()+"/.mweba.json",function(err){
            if(!err){
             callback_ok("Deletado com sucesso!");
            }else{
             callback_error(err);
            }
       });
    }else{
       log("fail","não foi possível apagar o arquivo de configuração, pois ele não existe! Acesse o help do sistema para informações de geração do arquivo de configuração 'mweba -h' ");
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
