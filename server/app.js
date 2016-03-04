var properties = {
  port : '5000'
};

var server  = require('./infra/Server')(properties);
server.start();


module.exports = function(){
  return server;
};

