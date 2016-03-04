

function captor(param ,cliente){
  const spawn = require('child_process').spawn;
  const tcpdump = spawn('tcpdump', ['-i', param.i,  'tcp port http']);

  //'wlan0', '-A', 'tcp port http'

  tcpdump.stdout.setEncoding('utf8');

  tcpdump.stdout.on('data', (data) => {
    cliente.send(data,function(error,msg){
      if(error!=null){
          process.stdout.write(msg);
      }
       process.stdout.write(error);
       process.exit(1);
    });
  });

  tcpdump.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  tcpdump.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });


}


module.exports = captor;

