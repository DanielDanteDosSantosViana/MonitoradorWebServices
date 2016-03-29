
const net = require('net');
const JSONStream = require('JSONStream');


function agentSocket(){
  this._agentSocket = null;
  this._protocolo = require('../protocolo/protocolo');
}


agentSocket.prototype.connect = function(properties, callback){
      console.log(properties.properties.port);

  this._agentSocket = net.connect(properties.properties.port ,properties.properties.ip,() => {
    console.log('connected to server!');
    callback(null,'connected');
  });

  this._dataReceiver((retorno)=>{
    console.log(retorno);
  });

  this._disconnect();

};

agentSocket.prototype.send = function(data,callback){

  this._agentSocket.write(JSONStream.stringify(data));
  this._agentSocket.end();
  callback(null,"MsgEnviada: "+ JSON.stringify(data));
};


agentSocket.prototype._dataReceiver = function(callback){
  this._agentSocket.on('data', (data) => {
  this._agentSocket.end();
  callback(data);

  });
}

agentSocket.prototype._disconnect = function(){
  this._agentSocket.on('end', () => {
  console.log('disconnected from server');
  });

}

module.exports = function() {
  return new agentSocket();
};


