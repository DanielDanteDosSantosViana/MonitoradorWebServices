
var fs = require('fs'),
  path = require('path'),
  crypto = require('crypto');
  utils = require('../utils');
  connection = require('../connection')

module.exports = init;

function init(){
  writeFileConfig(function(error,msg){
    if(error!=null){
       utils.log(error,msg);
       return;
    }

    connection.connect({},function(error,msg){

    });


  });
}

function writeFileConfig(callback){
  fs.exists(process.cwd()+"/.mweba", function (exists) {
    if(!exists){
      var timestamp = new Date().toString()
      ,md5 = crypto.createHash('md5');
      pw = md5.update(timestamp).digest('hex');

      fs.writeFile(process.cwd()+"/.mweba"," token:"+pw, function(err) {
          if(err) {
              callback("error",err);
              return console.log(err);
          }
        utils.log("info","Sua senha para monitoramento :"+ pw);
      });

    }else{
       callback("fail","Sua senha de monitoramento já foi gerada anteriormente!");
    }
  });
}
