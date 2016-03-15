
var fs = require('fs'),
  path = require('path'),
  crypto = require('crypto');

module.exports = init;

function init(){
  writeFileConfig();
}

function writeFileConfig(){
  fs.exists(process.cwd()+"/.mweba", function (exists) {
    if(exists){
      var timestamp = new Date().toString()
      ,md5 = crypto.createHash('md5');
      pw = md5.update(timestamp).digest('hex');

      fs.writeFile(process.cwd()+"/.mweba"," token:"+pw, function(err) {
          if(err) {
              return console.log(err);
          }
      });
    }
  });
}

