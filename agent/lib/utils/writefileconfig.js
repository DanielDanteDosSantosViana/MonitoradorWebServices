var log = require('./log');


function writeFileConfig(token,callback){
  fs.exists(process.cwd()+"/.mweba", function (exists) {
    if(!exists){

      fs.writeFile(process.cwd()+"/.mweba"," token:"+token, function(err) {
          if(err) {
              callback("error",err);
              return console.log(err);
          }

        log("info","Sua senha para monitoramento :"+ token);
        callback(null,"ok");
      });

    }else{
       callback("fail","Sua senha de monitoramento já foi gerada anteriormente!");
    }
  });
}


module.exports = writeFileConfig;
