const spawn = require('child_process').spawn;
const tcpdump = spawn('tcpdump', ['-i', 'wlan0', '-A', 'tcp port http']);

tcpdump.stdout.setEncoding('utf8');

tcpdump.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

tcpdump.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

tcpdump.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


