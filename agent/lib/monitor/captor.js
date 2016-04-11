var parserPackageHTTP = require('./parserpackagehttp');
function captor(callback){
  const spawn = require('child_process').spawn;

  const httpry = spawn('httpry', [ '-i','any']);


  httpry.stdout.setEncoding('utf8');

  httpry.stdout.on('data',
      parserPackageHTTP(function(lines){
          callback(lines);
      })
   );

  httpry.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}


module.exports = captor;

