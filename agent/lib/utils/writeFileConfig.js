var log = require('./log');
var fs = require('fs');

function writeFileConfig(data,callback){
  fs.exists(process.cwd()+"/.mweba.json", function (exists) {
    if(!exists){
      fs.writeFile(process.cwd()+"/.mweba.json",data, function(err){
          if(err) {
              callback("error",err);
          }else{
            callback(null,"ok");
          }
      });
     }else{
      console.log("já existe");
    }
  });
}

/*
function existFile(){
    fs.exists(process.cwd()+"/.mweba.json", function (exists) {
       if(!exists){
          return true;
       }else{
          return false;
       }
    }
}
*/

module.exports = writeFileConfig;

